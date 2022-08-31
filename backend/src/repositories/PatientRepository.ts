import PatientModel from '../database/models/PatientModel';
import { IPatientRepository } from '../interfaces/IRepositories';


class PatientRepository implements IPatientRepository {
  constructor(private model = PatientModel) {}

  async getPatients(): Promise<PatientModel[]> {
    const installmentData = await this.model.findAll();
    return installmentData as PatientModel[];
  };

  public async newPatient(dataPatient: Omit<PatientModel, 'id'>): Promise<PatientModel> {
    const patient = await this.model.create(dataPatient);
    return patient as PatientModel;
  };
};

export default PatientRepository;