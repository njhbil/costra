import { Response, Request } from "express";
import { nanoid } from "nanoid";
import db from "../config/database";
import { PoolConnection } from "mysql2/promise";


const createProduct = async (req: Request, res: Response) => {
    let connection : PoolConnection | null = null;
    try {
        const { company_id, name, hpp, profit_type, profit_value, stock } = req.body;
        const userId = (req as any).user.id;

        if (!userId) {
            return res.status(401).json({
                message : 'Unauthorized'
            });
        }
        if (!company_id || !name || !hpp || !profit_type || !profit_value || !stock){
            return res.status(401).json({
                message : 'Please, fill all the product data correctly'
            });
        }
        const [existingProduct] = await db.query(
            'SELECT * FROM products WHERE name = ?', [name]
        ) as any[];
        if (existingProduct.length > 0){
            return res.status(409).json({
                message : 'Product name already exists'
            });
        }
        const productId = nanoid(16);
        const barcode = nanoid(12);
        const sellingPrice = profit_type === 'PERCENT' ? hpp + (hpp * profit_value / 100) : hpp + profit_value;
        connection = await db.getConnection();
        await connection.query(
            'INSERT INTO products (id, name, hpp, profit_type, profit_value, stock, selling_price, company_id, barcode) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [productId, name, hpp, profit_type, profit_value, stock, sellingPrice, company_id, barcode]
        );
        await connection.commit();
        return res.status(201).json({
            message : 'Product created successfully',
            data : {
                id : productId,
                name,
                hpp,
                profit_type,
                profit_value,
                stock,
                sellingPrice,
                company_id,
                barcode
            }
        });
    } catch(error : any) {
        if (connection) {
            await connection.rollback();
        }
        return res.status(500).json({
            message : error.message
        });
    } finally {
        if (connection) {
            connection.release();
        }
    }

}


const getProducts = async (req: Request, res: Response) => {
try {
    const userId = (req as any).user.id;

    if (!userId) {
        return res.status(401).json({
            message : 'Unauthorized'
        });
    }
    const [products] = await db.query(
        'SELECT p.name, p.hpp, p.profit_type, p.profit_value, p.stock, cu.user_company FROM products p JOIN company_user cu ON p.company_id = cu.user_company WHERE cu.user_id = ?', [userId] ) as any[];
    
    if(products.length === 0){
        return res.status(404).json({
            message : 'No products found for this user'
        });
    }

    return res.status(200).json({
        data : products[0]
    });

} catch (error : any) {
    return res.status(500).json({
        message : error.message
    });
}
}

const getProductById = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const userId = (req as any).user.id;
        if (!userId) {
            return res.status(401).json({
            message : 'Unauthorized'
        });
        }
        const [products] = await db.query(
            'SELECT p.name, p.selling_price, cu.user_company FROM products p JOIN company_user cu ON p.company_id = cu.user_company WHERE cu.user_id = ? AND p.id = ?', [userId, id] ) as any[];

        if (products.length === 0) {
            return res.status(404).json({
                message : 'Product not found'
            });
        }
        return res.status(200).json({
            data : products[0]
        });
    } catch (error : any) {
        return res.status(500).json({
            message : error.message
        });
    }
}

const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, hpp, profit_type, profit_value, stock } = req.body;
        const userId = (req as any).user.id;
        if (!userId) {
            return res.status(401).json({
                message : 'Unauthorized'
            });
        }
        const [access] = await db.query(
            'SELECT role FROM company_user WHERE user_id = ? AND user_company = (SELECT company_id FROM products WHERE id = ?)', [userId, id]
        ) as any[]; 
        if (access.length === 0 || access[0].role !== 'owner' || access[0].role !== 'admin' ) {
            return res.status(403).json({
                message : 'Forbidden'
            });
        }
        const sellingPrice = profit_type === 'PERCENT' ? hpp + (hpp * profit_value / 100) : hpp + profit_value;
        const [updatedProduct] = await db.query(
            'UPDATE products SET name = ?, hpp = ?, profit_type = ?, profit_value = ?, stock = ?, selling_price = ? WHERE id = ?', [name, hpp, profit_type, profit_value, stock, sellingPrice, id]
        ) as any[] ;
        
        if (updatedProduct.affectedRows === 0) {
            return res.status(404).json({
                message : 'Product not found'
            });
        }
        return res.status(200).json({
            message : 'Product updated successfully'
        });

    } catch (error : any) {
        return res.status(500).json({
            message : error.message
    }); 
    }
    }

const deleteProduct = async (req: Request, res: Response) => {
    const userId = (req as any).user.id;
    const { id } = req.params;
    try {
        if (!userId) {
            return res.status(401).json({
                message : 'Unauthorized'
            });
        }
        const [access] = await db.query(
            'SELECT role FROM company_user WHERE user_id = ? AND user_company = (SELECT company_id FROM products WHERE id = ?)', [userId, id]
        ) as any[]; 
        if (access.length === 0 || access[0].role !== 'owner') {
            return res.status(403).json({
                message : 'Forbidden'
            });
        }
        const [deletedProduct] = await db.query(
            'DELETE FROM products WHERE id = ?', [id]
        ) as any[];
        if (deletedProduct.affectedRows === 0) {
            return res.status(404).json({
                message : 'Product not found'
            });
        }
        return res.status(200).json({
            message : 'Product deleted successfully'
        });
    } catch (error : any) {
        return res.status(500).json({
            message : error.message
        });
    }
}


export {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
};