import { Router } from 'express';
import PatientController from '../controllers/PatientController';
import PatientRepository from '../repositories/PatientRepository';
import PatientService from '../services/PatientService';
// import validateToken from '../middlewares/validateToken';

const PatientRouter = Router();

const PatientFactory = () => {
    const model = new PatientRepository();
    const service = new PatientService(model);
    const controller = new PatientController(service);
  
    return controller;
  };

  PatientRouter.get('/', (req, res, next) =>{
    PatientFactory().getPatients(req, res, next);
  });

  PatientRouter.post('/', (req, res, next) =>{
    PatientFactory().newPatient(req, res, next);
  });

export default PatientRouter;