import InstallmentModel from "../database/models/InstallmentModel";
import PatientModel from "../database/models/PatientModel";
import ProcedureModel from "../database/models/ProcedureModel";
import UserModel from "../database/models/UserModel";

export interface ILoginRepository {
    newLogin(email: string): Promise<UserModel>;
}

export interface IInstallmentRepository {
    getInstallments(): Promise<InstallmentModel[]>,
    newInstallments(dataIstallments: Omit<InstallmentModel, 'id' >[]): Promise<InstallmentModel[]>,
}

export interface IPatientRepository {
    getPatients(): Promise<PatientModel[]>,
    newPatient(dataPatient: Omit<PatientModel, 'id' >): Promise<PatientModel>,
}

export interface IProcedureRepository {
    getProcedures(): Promise<ProcedureModel[]>,
    newProcedure(dataPatient: Omit<ProcedureModel, 'id' >): Promise<ProcedureModel>,
}