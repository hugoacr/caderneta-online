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

  // userRouter.get('/', validateToken, (req, res, next) =>{
  InstallmentRouter.get('/', (req, res, next) =>{
    InstallmentFactory().getInstallment(req, res, next);
  });

export default InstallmentRouter;