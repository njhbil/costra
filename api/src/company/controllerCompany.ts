import { nanoid } from 'nanoid';
import { Request, Response } from 'express';
import db from '../config/database';
import { PoolConnection } from 'mysql2/promise';


const createCompany = async (req : Request, res : Response) => {

    let connection : PoolConnection | null = null;
    try {

    const { name, address, phone } = req.body;
    const userId = (req as any).user.id;

    if ( !name || !address || !phone ){
        return res.status(401).json({
            message : 'Silahkan isi semua data perusahaan dengan benar'
        });
    };

    const [existingCompany] = await db.query(
        'SELECT * FROM company WHERE name = ?', [name]
    ) as any[];

    if (existingCompany.length > 0){
        return res.status(409).json({
            message : 'Nama Perusahaan telah digunakan'
        });
    };

    const companyId = nanoid(16);
    const companyUserId = nanoid(16);
    
    connection = await db.getConnection();

    await connection.beginTransaction()

    await connection.query(
        'INSERT INTO company (id, name, address, phone, created_by) VALUES (?, ?, ?, ?, ?)', [companyId, name, address, phone, userId]
    );

    await connection.query(
        'INSERT INTO company_user (id, user_company, user_id, role) VALUES (?, ?, ?, ?)', [companyUserId, companyId, userId, 'owner']
    );

    await connection.commit();

    return res.status(201).json({   
        
        message: 'Register berhasil'
    });

    } catch (err : any) {
        if (connection) await connection.rollback();
        return res.status(401).json({
            message : err.message
        })
    } finally{
        if (connection) connection.release()
    }
};


const getCompany = async (req : Request , res : Response)=> {

    try {
    const userId = (req as any).user.id;

    if (!userId){
        return res.status(401).json({
            message : 'Silahkan Login terlebih dahulu'
        });
    };

    const [companies] = await db.query(
        'SELECT c.id, c.name, c.address, cu.role FROM company c JOIN company_user cu ON c.id = cu.user_company WHERE cu.user_id = ?', [userId]
    ) as any[];

    if (companies.length === 0){
        return res.status(200).json({
            message : 'Tidak ada perusahaan yang terhubung'
        });
    }

    return res.status(200).json({
        message : 'Succes',
        data : companies[0]

    });
} catch(err : any){
    return res.status(500).json({
        message : err.message
    })
}
}

const deleteCompany = async (req : Request, res : Response)=> {
    const userId = (req as any).user.id;
    const { id } = req.params;
    
    try{

    const [acces] = await db.query(
        'SELECT role FROM company_user WHERE user_id = ? AND user_company = ?', [userId, id]
    ) as any[];

    if (acces.length === 0){
        return res.status(404).json({ message: 'Perusahaan tidak ditemukan atau Anda tidak punya akses' });
    }

    if(acces[0].role !== 'owner'){
        return res.status(403).json({
            message : 'Only owner can delete company'
        })
    }
    const [result] = await db.query(
        'DELETE FROM company WHERE id = ?', [id]
    ) as any[];

    if (result.affectedRows === 0){
        return res.status(404).json({
            message: 'Failed to delete the company'
    });
}
    res.status(200).json({
        status : 'success',
        message : 'Company success to delete'
    })
} catch (err : any){
        return res.status(500).json({
            message : err.message
        });
    }
}


export { createCompany, getCompany, deleteCompany};