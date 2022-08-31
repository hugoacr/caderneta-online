import ProcedureModel from '../database/models/ProcedureModel';
import { IProcedureRepository } from '../interfaces/IRepositories';


class ProcedureRepository implements IProcedureRepository {
  constructor(private model = ProcedureModel) {}

  async getProcedures(): Promise<ProcedureModel[]> {
    const installmentData = await this.model.findAll();
    return installmentData as ProcedureModel[];
  };

  public async newProcedure(dataProcedure: Omit<ProcedureModel, 'id'>): Promise<ProcedureModel> {
    const Procedure = await this.model.create(dataProcedure);
    return Procedure as ProcedureModel;
  };
};

export default ProcedureRepository;