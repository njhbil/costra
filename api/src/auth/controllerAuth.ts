import { Request, Response } from 'express';
import { nanoid } from 'nanoid';
import  db  from '../config/database';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken'


const createUser = async (req : Request, res : Response) => {

    try {
        const { username , email, password} = req.body;

    if (!username || !email || !password){
        return res.status(201).json({
            message : "Semua data (username, email, password) wajib diisi!"
        });
    }

    const [existingUsername] = await db.query(
        'SELECT * FROM users WHERE username = ?', [username]
    ) as any[];

    if (existingUsername.length > 0){
        return res.status(409).json({
            message : 'Username sudah digunakan, gunakan username lainya'
        });
    };
        
    const [existingMail] = await db.query(
        'SELECT * FROM users WHERE email = ?', [email]
    ) as any[];

    if (existingMail.length > 0){
        return res.status(409).json({
            message : 'Email sudah digunakan, gunakan username lainya'
        });
    };
    
    const id = nanoid(16);
    const hashPassword = await argon2.hash(password)

    await db.query(
        'INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)', [id, username, email, hashPassword]
    );
    return res.status(201).json({
        message: 'Register berhasil'
    });

    }catch (err: any){
        return res.status(500).json({
            message: "Terjadi kesalahan pada server",
            error : err.message
        });
    } 
    }
    


const loginUser = async (req : Request, res : Response) => {
    try {
        const { username, email, password } = req.body;

        if (!username && !email){
            return res.status(400).json({
                message: 'username atau Email wajib diisi'
            });
        };

        if (!password) {
            return res.status(400).json({
                message: 'Password wajib diisi'
            });
 
        }

        const [check] = await db.query(
            'SELECT * FROM users WHERE username = ? OR email = ?', [username, email]
        ) as any[];

        if (check.length === 0){
            return res.status(401).json({
                message : 'username tidak ditemukan'
            });
        };

        const isMatch = await argon2.verify(check[0].password, password );

        if (!isMatch){
            return res.status(401).json({ message : 'password tidak sesuai'});
        };

        const token = jwt.sign(
            { id : check[0].id , username : check[0].username },
            process.env.JWT_SECRET as string,
            { expiresIn : '1d' }
        );

        return res.status(200).json({
            message : 'Login Sukses',
            token
        });

       
    } catch (err: any) {
        return res.status(500).json({
            message: "Terjadi kesalahan pada server",
            error : err.message
        });
    }
}



    export { createUser, loginUser };