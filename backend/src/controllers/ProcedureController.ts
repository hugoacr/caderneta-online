import { NextFunction, Request, Response } from "express";
import { IProcedureService } from "../interfaces/IServices";

class ProcedureController {
  constructor(private service: IProcedureService) {
    this.service = service;
  }
  
  async getProcedures(_req: Request, res: Response, next: NextFunction) {
    try {
    const procedureData = await this.service.getProcedures(); 
    return res.status(200).send( procedureData );
    } catch (error) {
    next(error);
    }
  }

  async newProcedure(req: Request, res: Response, next: NextFunction) {
    try {
    const procedureData = req.body;
    const createProcedure = await this.service.newProcedure(procedureData); 
    return res.status(201).send( createProcedure );
    } catch (error) {
    next(error);
    }
  }
}
  
export default ProcedureController;