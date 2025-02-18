import { Request, Response } from "express";
import { AppDataSource } from "../config";
import { Coupon } from "../entity/coupon.entity";


export const getCoupon = async (req: Request, res: Response) => {
    const couponRepository = AppDataSource.getRepository(Coupon);
    try {
        const coupons = await couponRepository.find({
            select: {
              id: true,
              discount: true,
              expiry_date: true,
              status: true,
            },
          });
          
        console.log(coupons)
        return res.status(200).json({ message: "Success", coupons });
  
    } catch (err) {
        console.log(err)
        return res.status(500).json({ success: false, message: 'Internal server error!' });
    }
  };

  export const createCoupon = async (req: Request, res: Response) => {
    const couponRepository = AppDataSource.getRepository(Coupon);
    const { datas } = req.body; // Expecting an array of coupon objects

    if (!datas || !Array.isArray(datas) || datas.length === 0) {
        return res.status(400).json({ success: false, message: "Invalid or missing coupon data!" });
    }

    try {
        const newCoupons = couponRepository.create(datas);
        await couponRepository.save(newCoupons);

        return res.status(201).json({ message: "Coupons created successfully!", coupons: newCoupons });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Internal server error!" });
    }
};
