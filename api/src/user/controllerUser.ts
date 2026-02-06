import { Request, Response } from "express";
import db from "../config/database";

const getUser = async (req : Request, res : Response) => {

    try {
    const userId = (req as any).user.id;
    
    const [check] = await db.query(
        'SELECT u.id, u.username, u.email, cu.user_company, c.name, cu.role, FROM users u JOIN company_user cu ON u.id = cu.user_company JOIN company c ON cu.user_company = c.id WHERE u.id = ?', [userId]
    ) as any[];

    if (check.length === 0){
        return res.status(400).json({
            message : 'Not Found'
        })
    } 

    return res.status(201).json({
        status : 'success',
        data : check[0]
    })
    } catch (err : any ){
        return res.status(500).json({
            message : err.message
        });
    };
    
}

export { getUser };