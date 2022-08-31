import InstallmentModel from "../database/models/InstallmentModel";
import PatientModel from "../database/models/PatientModel";
import ProcedureModel from "../database/models/ProcedureModel";
import UserModel from "../database/models/UserModel";

export interface ILoginService {
    newLogin(login: string, password: string): Promise<UserModel>;
}

export interface IInstallmentService {
    getInstallments(): Promise<InstallmentModel[]>,
    newInstallments(dataIstallments: Omit<InstallmentModel, 'id' >[]): Promise<InstallmentModel[]>,
}

export interface IPatientService {
    getPatients(): Promise<PatientModel[]>,
    newPatient(dataPatient: Omit<PatientModel, 'id' >): Promise<PatientModel>,
}

export interface IProcedureService {
    getProcedures(): Promise<ProcedureModel[]>,
    newProcedure(dataPatient: Omit<ProcedureModel, 'id' >): Promise<ProcedureModel>,
}