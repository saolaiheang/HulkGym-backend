import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import { NewsAnnouncements } from "../entity/new.entity";

export const CreateNew = async (req: Request, res: Response) => {
    const newRepo = AppDataSource.getRepository(NewsAnnouncements);
    const { title, content, location, description, message, status, published_date } = req.body;
    
    try {
        
       
        const news = new NewsAnnouncements();
        news.title = title;
        news.content = content;
        news.location = location;
        news.description = description;
        news.message = message;
        news.status = status;
        news.published_date = published_date;
        await newRepo.save(news);

        res.status(201).json({ message: "News announcement created successfully", data: news });

    } catch (err) {
        console.error("Error creating news announcement:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
};



export const GetNewsAnnouncements = async (req: Request, res: Response) => {
    const newsRepo = AppDataSource.getRepository(NewsAnnouncements);

    try {
        const news = await newsRepo.find();
        console.log(news);

        return res.status(200).json({ message: "News announcements retrieved successfully", news });
    } catch (err) {
        console.error("Error fetching news announcements:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
};