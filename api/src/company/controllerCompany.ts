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

export { createCompany };