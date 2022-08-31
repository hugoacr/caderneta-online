import ProcedureModel from '../database/models/ProcedureModel';
import { IProcedureRepository } from '../interfaces/IRepositories';
import { IProcedureService } from '../interfaces/IServices';

class ProcedureService implements IProcedureService {
  constructor(private model: IProcedureRepository ) {
    this.model = model;
  }

  public async getProcedures(): Promise<ProcedureModel[]> {
    const teamsData = await this.model.getProcedures();
    return teamsData as ProcedureModel[];
  };

  public async newProcedure(dataProcedure: Omit<ProcedureModel, "id">): Promise<ProcedureModel> {
    const procedure = await this.model.newProcedure(dataProcedure);
    return procedure;
  };
};

export default ProcedureService;