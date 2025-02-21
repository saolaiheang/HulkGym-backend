import { Request, Response } from "express";
import { AppDataSource } from "../config";
import { Coupon } from "../entity/coupon.entity";


export const PostDataCoupon = async (req: Request, res: Response) => {
    const userRepo = AppDataSource.getRepository(Coupon);
    const { title, offer, valid_until, terms, status } = req.body;
    
    if (!title || !offer) {
        return res.status(404).json({
            message: "something wrong",
        });
    }

    const coupon = new Coupon();
    coupon.title = title
    coupon.offer = offer
    coupon.valid_until = valid_until
    coupon.terms = terms
    coupon.status = status

    await userRepo.save(coupon);

    return res
        .status(200)
        .json({ message: "User created successfully" });
};

export const getDataCoupon = async (req: Request, res: Response) => {

    const userRepo = AppDataSource.getRepository(Coupon);
    try{
        const coupon = await userRepo.find();
        res.status(201).json(coupon);

    }catch(err){
        res.status(500).json({message: "Internal server not found."})
    }

}

export const getDataByIdCoupon = async (req: Request, res: Response) => {

    const userRepo = AppDataSource.getRepository(Coupon);
    const id = req.params.id;
    try{
        const coupon = await userRepo.findBy({ id: id });
        res.status(200).json(coupon);
    }catch(err){
        res.status(500).json({message: "Internal server not found."})
    }
}

export const updateDataCoupon = async (req: Request, res: Response) => {

    const userRepo = AppDataSource.getRepository(Coupon);
    const id = req.params.id;
    const updateData = req.body;
    try{
        const coupon = await userRepo.findBy({id: id});
        await userRepo.update(id, updateData);
        res.status(200).json({message: "Update succes...."})
    }catch(err){
        res.status(500).json({message: "Internal server not found."})
    }
}

export const deleteDataCoupon = async (req: Request, res: Response) => {

    const userRepo = AppDataSource.getRepository(Coupon);
    const id = req.params.id;
    try{

        const coupon = await userRepo.findBy({id: id});
        await userRepo.delete(id);
        res.status(200).json({message: "Delete succes...."})
    }catch(err){
        res.status(500).json({message: "Internal server not found."})
    }
}