import { Request, Response } from "express";
import { AppDataSource } from "../config";
import { Branch } from "../entity/branch.entity";


export const getBranch = async (req: Request, res: Response) => {
    const branchRepository = AppDataSource.getRepository(Branch);
    try {
        const branchs = await branchRepository.find();
        // ({
          
          //   select: {
          //     id: true,
          //     name: true,
          //     location: true,
          //     description: true,
          //   },
          // });
          
        // console.log(branchs)
        return res.status(200).json({ message: "Success", branchs });
  
    } catch (err) {
        console.log(err)
        return res.status(500).json({ success: false, message: 'Internal server error!' });
    }
  };