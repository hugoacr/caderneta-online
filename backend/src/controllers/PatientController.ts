import { NextFunction, Request, Response } from "express";
import { IPatientService } from "../interfaces/IServices";

class PatientController {
  constructor(private service: IPatientService) {
    this.service = service;
  }
  
  async getPatients(_req: Request, res: Response, next: NextFunction) {
    try {
    const patientData = await this.service.getPatients(); 
    return res.status(200).send( patientData );
    } catch (error) {
    next(error);
    }
  }

  async newPatient(req: Request, res: Response, next: NextFunction) {
    try {
    const patientData = req.body;
    const createPatient = await this.service.newPatient(patientData); 
    return res.status(201).send( createPatient );
    } catch (error) {
    next(error);
    }
  }
}
  
export default PatientController;