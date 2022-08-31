import { NextFunction, Request, Response } from "express";
import { IInstallmentService } from "../interfaces/IServices";

class InstallmentController {
  constructor(private service: IInstallmentService) {
    this.service = service;
  }
  
  async getInstallments(_req: Request, res: Response, next: NextFunction) {
    try {
    const installmentData = await this.service.getInstallments(); 
    return res.status(200).send( installmentData );
    } catch (error) {
    next(error);
    }
  }

  async newInstallments(req: Request, res: Response, next: NextFunction) {
    try {
    const installmentData = req.body;
    const createInstallment = await this.service.newInstallments(installmentData); 
    return res.status(201).send( createInstallment );
    } catch (error) {
    next(error);
    }
  }
}
  
export default InstallmentController;