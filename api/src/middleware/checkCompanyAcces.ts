import { Request, Response, NextFunction } from "express";
import db from "../config/database";

const checkAccessOnlyOwner = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = (req as any).user.id;

    const [rows] = (await db.query(
      "SELECT role, user_id FROM company_user WHERE user_id = ?",
      [userId],
    )) as any[];

    if (rows.length === 0) {
      return res.status(200).json({
        message: "User ditemukan tapi belum memiliki perusahaan",
        user: { id: userId },
        companies: [],
      });
    }

    if (rows[0].role === "owner") {
      next();
    } else {
      return res.status(401).json({
        message: "Owner access only",
      });
    }
  } catch (err: any) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const checkAccessAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = (req as any).user.id;

    const [rows] = (await db.query(
      "SELECT role, user_id FROM company_user WHERE user_id = ?",
      [userId],
    )) as any[];

    if (rows.length === 0) {
      return res.status(200).json({
        message: "User ditemukan tapi belum memiliki perusahaan",
        user: { id: userId },
        companies: [],
      });
    }

    if (rows[0].role === "owner" || rows[0].role === "admin") {
      next();
    } else {
      return res.status(401).json({
        message: "Access denied",
      });
    }
  } catch (err: any) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const checkAccessStaff = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = (req as any).user.id;

    const [rows] = (await db.query(
      "SELECT role, user_id FROM company_user WHERE user_id = ?",
      [userId],
    )) as any[];

    if (rows.length === 0) {
      return res.status(200).json({
        message: "User ditemukan tapi belum memiliki perusahaan",
        user: { id: userId },
        companies: [],
      });
    }

    if (
      rows[0].role === "owner" ||
      rows[0].role === "admin" ||
      rows[0].role === "staff"
    ) {
      next();
    } else {
      return res.status(401).json({
        message: "Access denied",
      });
    }
  } catch (err: any) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

export { checkAccessOnlyOwner, checkAccessAdmin, checkAccessStaff };
