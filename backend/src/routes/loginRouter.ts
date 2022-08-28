import { Router } from 'express';
import LoginController from '../controllers/loginController';
import LoginRepository from '../repositories/loginRepository';
import LoginService from '../services/loginService';
import validateLogin from '../middlewares/validateLogin';

const userRouter = Router();

const loginFactory = () => {
    const model = new LoginRepository();
    const service = new LoginService(model);
    const controller = new LoginController(service);
  
    return controller;
  };

  userRouter.post('/', validateLogin, (req, res, next) =>{
    loginFactory().newLogin(req, res, next);
  });

export default userRouter;