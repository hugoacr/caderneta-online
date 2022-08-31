import PatientModel from '../database/models/PatientModel';
import { IPatientRepository } from '../interfaces/IRepositories';
import { IPatientService } from '../interfaces/IServices';

class PatientService implements IPatientService {
  constructor(private model: IPatientRepository ) {
    this.model = model;
  }

  public async getPatients(): Promise<PatientModel[]> {
    const teamsData = await this.model.getPatients();
    return teamsData as PatientModel[];
  };

  public async newPatient(dataPatient: Omit<PatientModel, "id">): Promise<PatientModel> {
    const patient = await this.model.newPatient(dataPatient);
    return patient;
  };
};

export default PatientService;