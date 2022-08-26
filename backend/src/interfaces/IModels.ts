export interface IUser {
    id: number;
    name: string;
    login: string;
    password: string;
    role: string;
};

export interface IPatient {
    id: number;
    name: string;
    address: string;
    phoneNumber: string;
};

export interface IProcedure {
    id: number;
    name: string;
    price: number;
};

export interface IInstallment {
    id: number;
    salleId: number;
    maturity: any;
    value: number;
    status: string;
};

export interface ISalleOnCredit {
    installmentId: number;
    patientId: number;
    procedureId: number;
    userId: number;
};