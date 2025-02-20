import { Request, Response } from "express";
import { AppDataSource } from "../config";
import { Coupon } from "../entity/coupon.entity";
import { UserInfo } from "../entity/user.entity";


export const PostDataCoupon = async (req: Request, res: Response) => {
    const userRepo = AppDataSource.getRepository(Coupon);
    const userInfoId = AppDataSource.getRepository(UserInfo);
    const { userId, discount, expiry_date, status } = req.body;
    const user = await userInfoId.findOne({ where: { id: req.user?.id } });

    if (!userId) {
        console.log('User not found. Please ensure a user exists.');
        return;
    }

    if (!user) {
        return res.status(500).json({
            message: "something wrong",
        });
    }



    const coupon = new Coupon();
    userId.userId = user,
        discount.discount = discount
    expiry_date.expiry_date = expiry_date
    status.status = status

    await userRepo.save(coupon);

    return res
        .status(200)
        .json({ message: "User created successfully" });
};
