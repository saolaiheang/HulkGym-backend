import { Request, Response } from "express";
import { AppDataSource } from "../config";
import { Branch } from "../entity/branch.entity";
import { v4 as uuidv4 } from "uuid";

export const addBranch = async (req: Request, res: Response) => {
  const branchRepository = AppDataSource.getRepository(Branch);
  try {
    const { name, location, image } = req.body;
    const id = uuidv4();
    console.log(id);

    const branch = new Branch();
     branch.id=id,
      branch.name= name,
      branch.location=location,
      branch.image=image,

      await branchRepository.save(branch);
    return res.status(201).json({ message: "Branch added successfully" });
  }catch (error) {
    console.error("Error saving branch:", error);
    return res.status(500).json({ message: "Server Error"});
  }
};

export const getBranch = async (req: Request, res: Response) => {
  const branchRepository = AppDataSource.getRepository(Branch);
  try {
    const branchs = await branchRepository.find();
    // ({

    //   select: {
    //     id: true,
    //     name: true,
    //     location: true,
    //     image: true,
    //   },
    // });

    // console.log(branchs)
    return res.status(200).json({ message: "Success", branchs });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error!" });
  }
};

export const getById = async (req: Request, res: Response) => {
  const branchRepository = AppDataSource.getRepository(Branch);
  const branchId = req.params.id; // Keep it as a string

  try {
    const branch = await branchRepository.findOne({
      where: { id: branchId }, // ✅ Use branchId directly (string)
    });

    if (!branch) {
      return res
        .status(404)
        .json({ success: false, message: "Branch not found!" });
    }

    return res.status(200).json({ message: "Success", branch });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error!" });
  }
};

export const deleteById = async (req: Request, res: Response) => {
  const branchRepository = AppDataSource.getRepository(Branch);
  const branchId = req.params.id; // Keep it as a string (if id is a string)

  try {
    const result = await branchRepository.delete(branchId); // ✅ Correct way to delete

    if (result.affected === 0) {
      // Check if deletion was successful
      return res
        .status(404)
        .json({ success: false, message: "Branch not found!" });
    }

    return res.status(200).json({ message: "Delete Success" });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error!" });
  }
};
