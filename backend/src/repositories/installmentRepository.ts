import InstallmentModel from '../database/models/InstallmentModel';
import { IInstallmentRepository } from '../interfaces/IRepositories';

class InstallmentRepository implements IInstallmentRepository {
  constructor(private model = InstallmentModel) {}
  async getInstallment(): Promise<InstallmentModel[]> {
    const installmentData = await this.model.findAll();
    return installmentData as InstallmentModel[];
  };
};

export default InstallmentRepository;