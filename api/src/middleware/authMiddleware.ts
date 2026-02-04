import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'] as string;
    const token = authHeader?.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            message: 'Akses ditolak, token hilang!'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        (req as any).user = decoded;
        next();
    } catch (err: any) {
        return res.status(401).json({
            message: err.message
        });
    }
};