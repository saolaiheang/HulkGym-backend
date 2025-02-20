import { Request, Response } from "express";
import { Promotion } from "../entity/promotion.entity";
import { AppDataSource } from '../config';

export const PostDataPromotion = async (req: Request, res: Response) => {
    const userRepo = AppDataSource.getRepository(Promotion);
    const { promotion_code, description } = req.body;

    if (!promotion_code || !description) {
        return res.status(500).json({
            message: "something wrong",
        });
    }



    const promotion = new Promotion();
    promotion.promotion_code = promotion_code;
    promotion.description = description;

    await userRepo.save(promotion);

    return res
        .status(200)
        .json({ message: "User created successfully" });
};

export const GetDataPromotion = async (req: Request, res: Response) => {
    const userRepo = AppDataSource.getRepository(Promotion);
    try {
        const promotion = await userRepo.find()
        res.status(201).json(promotion);
    } catch (err) {
        res.status(500).json({ message: "Internal server" });
    }
}

export const GetByIdPromotion = async (req: Request, res: Response) => {
    const userRepo = AppDataSource.getRepository(Promotion);
    try {
        const id = req.params.id;
        const promotion = await userRepo.findBy({ id: id });
        res.status(200).json(promotion);
    } catch (err) {
        res.status(500).json({ message: "Internal server." });
    }
}

export const UpdateDataPromotion = async (req: Request, res: Response) => {
    const userRepo = AppDataSource.getRepository(Promotion);
    try {
        const id = req.params.id;
        const UpdatedData = req.body;
        const promotion = await userRepo.findOneBy({id})

        await userRepo.update(id, UpdatedData);

        res.status(200).json({succes: promotion});
    } catch (err) {
        res.status(500).json({ message: "Internal server." })
    }
}

export const deleteDataPromotion = async (req: Request, res: Response) => {
    const userRepo = AppDataSource.getRepository(Promotion);
    try {
        const id = req.params.id;
        const promotion = await userRepo.findOneBy({id})

        await userRepo.delete(id);

        res.status(200).json({succes: "Delete succes....."});
    } catch (err) {
        res.status(500).json({ message: "Internal server." })
    }
}
