import { Router } from 'express';
import InstallmentController from '../controllers/installmentController';
import InstallmentRepository from '../repositories/installmentRepository';
import InstallmentService from '../services/installmentService';
// import validateToken from '../middlewares/validateToken';

const InstallmentRouter = Router();

const InstallmentFactory = () => {
    const model = new InstallmentRepository();
    const service = new InstallmentService(model);
    const controller = new InstallmentController(service);
  
    return controller;
  };

  InstallmentRouter.get('/', (req, res, next) =>{
    InstallmentFactory().getInstallments(req, res, next);
  });

  InstallmentRouter.post('/', (req, res, next) =>{
    InstallmentFactory().newInstallments(req, res, next);
  });

export default InstallmentRouter;