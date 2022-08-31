import { Router } from 'express';
import ProcedureController from '../controllers/ProcedureController';
import ProcedureRepository from '../repositories/ProcedureRepository';
import ProcedureService from '../services/ProcedureService';
// import validateToken from '../middlewares/validateToken';

const ProcedureRouter = Router();

const ProcedureFactory = () => {
    const model = new ProcedureRepository();
    const service = new ProcedureService(model);
    const controller = new ProcedureController(service);
  
    return controller;
  };

  ProcedureRouter.get('/', (req, res, next) =>{
    ProcedureFactory().getProcedures(req, res, next);
  });

  ProcedureRouter.post('/', (req, res, next) =>{
    ProcedureFactory().newProcedure(req, res, next);
  });

export default ProcedureRouter;