import InstallmentModel from '../database/models/InstallmentModel';
import ProcedureModel from '../database/models/ProcedureModel';
import PatientModel from '../database/models/PatientModel';
import { IInstallmentRepository } from '../interfaces/IRepositories';


class InstallmentRepository implements IInstallmentRepository {
  constructor(private model = InstallmentModel) {}

  async getInstallments(): Promise<InstallmentModel[]> {
    const installmentData = await this.model.findAll({ 
      attributes: { exclude: ['procedureId', 'patientId', 'userId'] },
      include: [
        { model: ProcedureModel, as: 'procedure',},
        { model: PatientModel, as: 'patient', attributes: { exclude: [ 'address' ] },},
      ],
   });
    return installmentData as InstallmentModel[];
  };

  public async newInstallments(dataInstallments: Omit<InstallmentModel, 'id' >[] ): Promise<InstallmentModel[]> {
    const installments = await Promise.all(dataInstallments.map((installment) => 
    this.model.create(installment)));
    return installments as InstallmentModel[];
  };
};

export default InstallmentRepository;