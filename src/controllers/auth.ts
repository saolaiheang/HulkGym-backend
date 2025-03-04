import { comparePassword, encryptPassword, generateToken } from '../utils/encrypt';
import { Request, Response } from "express";
import { UserInfo } from "../entity/user.entity";
import { AppDataSource } from '../config';
import { RoleEnum, RoleType } from '../common';

export const register = async (req: Request, res: Response) => {
  const userRepo = AppDataSource.getRepository(UserInfo);
  const { firstName, lastName, chatId, email,phone} = req.body;

  // if (!name || !email) {
  //   return res.status(500).json({
  //     message: "something wrong",
  //   });
  // }

  const validUser = await userRepo.findOne({ where: { email: email } });
  if (validUser) {
    return res.status(400).json({
      message: "user already exist!",
    });
  }

  // const hashPassword = await encryptPassword(password);
  const user = new UserInfo();
  user.firstName = firstName;
  user.lastName = lastName;
  user.chatId = chatId;
  user.email = email;
  user.phone = phone;

  await userRepo.save(user);

  const token = generateToken({ id: user.id, role: RoleEnum[2] });

  return res
    .status(200)
    .json({ message: "User created successfully" });
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(500).json({
        message: "email and password are required",
      });
    }
    const userRepo = AppDataSource.getRepository(UserInfo);
    const user = await userRepo.findOne({ where: {email :email } });

    if (!user) {
      return res.status(400).json({
        _message: "User not found!",
        get message() {
          return this._message;
        },
        set message(value) {
          this._message = value;
        },
      });
    }

    // const isPasswordValid = comparePassword(user.email);
    // if (!user || !isPasswordValid) {
    //   return res.status(404).json({ message: "User not found" });
    // }
    const token = generateToken({ id: user.id, role: user.role as RoleType });
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    });
    return res.status(200).json({ message: "Login Successfully", token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};