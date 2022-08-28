import 'dotenv/config';
import { SignOptions, sign } from 'jsonwebtoken';
import UserModel from '../database/models/UserModel';

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const newToken = (payload: Omit<UserModel, 'password'>): string => {
  const token = sign({ data: payload }, `${process.env.JWT_SECRET}`, jwtConfig as SignOptions);

  return token;
};

export default newToken;