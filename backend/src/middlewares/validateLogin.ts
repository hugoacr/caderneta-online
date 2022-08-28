import { Request, Response, NextFunction } from 'express';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
    const { login, password } = req.body;
  
    if (!login || !password) {
      return res.status(400).send({ message: 'All fields must be filled' });
    }
    next();
};

export default validateLogin