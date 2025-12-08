import prisma from "../lib/prisma.ts";
import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { stat } from "fs";

export const registerUser = async (req: Request, res: Response) => {
  const { email, password, phone, role } = req.body;


  try {
    // validate input
    if (!email || !password || !phone) {
      console.log(email, password, phone);
      return res.status(400).json({ error: "Email, password, and phone are required" });
    }
    // check if user already exists
    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        phone,
        role: role || "USER",
      },
    });
    // confirm that JWT_SECRET is defined and narrow for TypeScript
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET environment variable is not set");
    }
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });
    res.status(201).json({ status: "success", data:{email: user.email, phone: user.phone, role: user.role}, token });
  } catch (error) {
    res.status(500).json({ status: "error", error: "User registration failed" });
  }
};  

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // validate input
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
    // check if user exists
    const userByEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (!userByEmail) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const isValidPassword = await bcrypt.compare(password, userByEmail.password);
    if (!isValidPassword) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // confirm that JWT_SECRET is defined and narrow for TypeScript
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET environment variable is not set");
    }
    const token = jwt.sign({ userId: userByEmail.id }, JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ status: "success", data: { email: userByEmail.email, phone: userByEmail.phone, role: userByEmail.role }, token });
  } catch (error) {
    res.status(500).json({ status: "error", error: "User login failed" });
  }
};

export const getUserProfile = async (req: Request, res: Response) => {
  const userReq = (req as any).user;
  const userId = userReq ?.userId;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ status: "success", data: user });
  } catch (error) {
    res.status(500).json({ status: "error", error: "Failed to fetch user profile" });
  }
};
// export const logoutUser = async () => {};