import { NextFunction, Request, Response } from "express";
import { ILoginService } from "../interfaces/IServices";

class LoginController {
  constructor(private service: ILoginService) {
    this.service = service;
  }
  
  async newLogin(req: Request, res: Response, next: NextFunction) {
    try {
    const { login, password } = req.body;
    const token = await this.service.newLogin(login, password);
    return res.status(200).send({ token });
    } catch (error) {
    next(error);
    }
  }
}
  
export default LoginController;