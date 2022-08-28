import InstallmentModel from '../database/models/InstallmentModel';
import { IInstallmentRepository } from '../interfaces/IRepositories';
import { IInstallmentService } from '../interfaces/IServices';

class InstallmentService implements IInstallmentService {
  constructor(private model: IInstallmentRepository ) {
    this.model = model;
  }
  public async getInstallment(): Promise<InstallmentModel[]> {
    const teamsData = await this.model.getInstallment();
    return teamsData as InstallmentModel[];
  };
};

export default InstallmentService;