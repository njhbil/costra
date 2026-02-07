import { Request, Response } from "express";
import db from "../config/database";

const getUser = async (req : Request, res : Response) => {

    try {
    const userId = (req as any).user.id;
    
    const [rows] = await db.query(
        'SELECT u.id, u.username, u.email, cu.user_company, c.name, cu.role FROM users u JOIN company_user cu ON u.id = cu.user_id JOIN company c ON cu.user_company = c.id WHERE u.id = ?', [userId]
    ) as any[];

    if (rows.length === 0){
        return res.status(200).json({
            message: 'User ditemukan tapi belum memiliki perusahaan',
            user: { id: userId }, 
            companies: []
        })
    } 

       const userData = {
        id : rows[0].id,
        username : rows[0].username,
        email : rows[0].email,
        companies : rows.map((row : any) => ({
           company_id : row.user_company,
            company_name : row.name,
            company_role : row.role
        }))

    }

    return res.status(201).json({
        status : 'success',
        data : userData
    })
    } catch (err : any ){
        return res.status(500).json({
            message : err.message
        });
    };
    
}

export { getUser };