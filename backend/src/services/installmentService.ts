import InstallmentModel from '../database/models/InstallmentModel';
import { IInstallmentRepository } from '../interfaces/IRepositories';
import { IInstallmentService } from '../interfaces/IServices';

class InstallmentService implements IInstallmentService {
  constructor(private model: IInstallmentRepository ) {
    this.model = model;
  }

  public async getInstallments(): Promise<InstallmentModel[]> {
    const installmentsData = await this.model.getInstallments();
    return installmentsData as InstallmentModel[];
  };

  public async newInstallments(dataInstallments: Omit<InstallmentModel, "id">[]): Promise<InstallmentModel[]> {
    const installments = await this.model.newInstallments(dataInstallments);
    return installments;
  };
};

export default InstallmentService;