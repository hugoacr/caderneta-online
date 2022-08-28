import UserModel from '../database/models/UserModel';
import { ILoginRepository } from '../interfaces/IRepositories';

class LoginRepository implements ILoginRepository {
  constructor(private model = UserModel) {}
  async newLogin(login: string): Promise<UserModel> {
    const userData = await this.model.findOne({ where: { login } });
    return userData as UserModel;
  };
};

export default LoginRepository;