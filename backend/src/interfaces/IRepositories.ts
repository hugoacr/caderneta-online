import InstallmentModel from "../database/models/InstallmentModel";
import UserModel from "../database/models/UserModel";

export interface ILoginRepository {
    newLogin(email: string): Promise<UserModel>;
}

export interface IInstallmentRepository {
    getInstallment(): Promise<InstallmentModel[]>,
}
