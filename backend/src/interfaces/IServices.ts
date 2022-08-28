import InstallmentModel from "../database/models/InstallmentModel";
import UserModel from "../database/models/UserModel";

export interface ILoginService {
    newLogin(login: string, password: string): Promise<UserModel>;
}

export interface IInstallmentService {
    getInstallment(): Promise<InstallmentModel[]>,
}