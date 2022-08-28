import { Request, Response, NextFunction } from 'express';
import * as jwt from "jsonwebtoken";
import HandleError from '../utils/HandleError';

const validateToken = (req: Request, _res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization as string;
      jwt.verify(token, `${process.env.JWT_SECRET}`) as jwt.JwtPayload;
      next();
    } catch (error) {
        throw HandleError.unauthorized('Token must be a valid token');
    };
}

export default validateToken