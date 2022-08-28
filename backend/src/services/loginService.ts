import newToken from '../middlewares/newToken';
import HandleError from '../utils/HandleError';
import UsersModel from '../database/models/UserModel';
import { ILoginService } from '../interfaces/IServices';
import { ILoginRepository } from '../interfaces/IRepositories';
import { compareSync } from 'bcryptjs';

class LoginService implements ILoginService {
    constructor(private model: ILoginRepository) {
      this.model = model;
    }
  
    public async newLogin(login: string, password: string): Promise<UsersModel> {
      const userData = await this.model.newLogin(login);
  
      if (!userData) {
        throw HandleError.unauthorized('Incorrect email or password');
      }
  
      const verifyPassword = compareSync(password, userData.password);
  
      if (!verifyPassword) {
        throw HandleError.unauthorized('Incorrect email or password');
      }
  
      return newToken(userData) as unknown as UsersModel;
    }
  }
  
  export default LoginService;