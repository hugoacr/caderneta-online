import { NextFunction, Request, Response } from "express";
import { IInstallmentService } from "../interfaces/IServices";

class InstallmentController {
  constructor(private service: IInstallmentService) {
    this.service = service;
  }
  
  async getInstallment(req: Request, res: Response, next: NextFunction) {
    try {
    const teamsData = await this.service.getInstallment(); 
    return res.status(200).send( teamsData );
    } catch (error) {
    next(error);
    }
  }
}
  
export default InstallmentController;