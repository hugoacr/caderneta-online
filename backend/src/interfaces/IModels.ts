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
    maturity: string;
    value: number;
    status: string;
    procedureId: number;
    patientId: number;
    userId: number;
};
