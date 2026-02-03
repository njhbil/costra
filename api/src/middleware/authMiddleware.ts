import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const verifyToken = (req : Request, res : Response, next : NextFunction) => {
    const authHeader = (req.headers as any)['authorization'];
    const token = authHeader && authHeader.split(' ')[1]

    if (!token){
        res.status(404).json({
            message: 'Akses ditolak, token hilang!'
        });
    }
    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

        (req as any).user = decoded;

        next();

    }catch (err : any){
        return res.status(401).json({
            message : err.message
        });
    };
};

