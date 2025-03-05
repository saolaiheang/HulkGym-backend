import { Request, Response } from "express";
import { AppDataSource } from "../config";
import { Branch } from "../entity/branch.entity";
export const getBranch = async (req: Request, res: Response) => {
  const branchRepository = AppDataSource.getRepository(Branch);
  try {
    // Fetching branches along with related Branch_Contact entities (phone_numbers)
    const branchs = await branchRepository.find({
      relations: ['phone_numbers'], // Include the related phone_numbers (Branch_Contact)
    });

    return res.status(200).json({ message: "Success", branchs });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error!" });
  }
};