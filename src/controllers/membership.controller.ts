import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import { MembershipPlan } from "../entity/membership.entity";

// export const CreateMembershipPlan = async (req: Request, res: Response) => {
//     const membershipRepo = AppDataSource.getRepository(MembershipPlan);
//     const { plan_name, price, features } = req.body;
    
//     try {
//         const membershipPlan = new MembershipPlan();
//         membershipPlan.plan_name = plan_name;
//         membershipPlan.price = price;
//         membershipPlan.features = features;
        
//         await membershipRepo.save(membershipPlan);

//         res.status(201).json({ message: "Membership plan created successfully", data: membershipPlan });
//     } catch (err) {
//         console.error("Error creating membership plan:", err);
//         return res.status(500).json({ message: "Internal server error" });
//     }
// };

export const GetMembershipPlans = async (req: Request, res: Response) => {
    const membershipRepo = AppDataSource.getRepository(MembershipPlan);
    
    try {
        const plans = await membershipRepo.find();
        console.log(plans);
        
        return res.status(200).json({ message: "Membership plans retrieved successfully", plans });
    } catch (err) {
        console.error("Error fetching membership plans:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
};
