import { Request, Response } from "express";
import db from "../config/database";

const getUser = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;

    const [rows] = (await db.query(
      "SELECT u.id, u.username, u.email, cu.user_company, c.name, cu.role FROM users u JOIN company_user cu ON u.id = cu.user_id JOIN company c ON cu.user_company = c.id WHERE u.id = ?",
      [userId],
    )) as any[];

    if (rows.length === 0) {
      const [rowsUser] = (await db.query("SELECT * FROM users WHERE id = ?", [
        userId,
      ])) as any[];
      const userData = {
        id: rowsUser[0].id,
        username: rowsUser[0].username,
        name: rowsUser[0].name,
        email: rowsUser[0].email,
        phone_number: rowsUser[0].phone_number,
      };
      return res.status(200).json({
        status: "success",
        message: "User ditemukan tapi belum memiliki perusahaan",
        data: userData,
      });
    }

    const userData = {
      id: rows[0].id,
      username: rows[0].username,
      email: rows[0].email,
      companies: rows.map((row: any) => ({
        company_id: row.user_company,
        company_name: row.name,
        company_role: row.role,
      })),
    };

    return res.status(200).json({
      status: "success",
      data: userData,
    });
  } catch (err: any) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

export { getUser };
