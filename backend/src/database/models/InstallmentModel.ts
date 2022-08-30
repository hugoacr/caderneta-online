import { DataTypes, Model } from 'sequelize';
import db from '.';
import { IInstallment } from '../../interfaces/IModels';
import Patient from './PatientModel';
import Procedure from './ProcedureModel';
import User from './UserModel';

class Installment extends Model implements IInstallment {
  public id!: number;
  public maturity!: string;
  public value!: number;
  public status!: string;
  public procedureId!: number;
  public patientId!: number;
  public userId!: number;
};

Installment.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    maturity: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    value: {
      allowNull: false,
      type: DataTypes.DECIMAL(10,2),
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    procedureId: DataTypes.INTEGER,
    patientId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
    tableName: 'installments',
  },
);

Installment.belongsTo(User, { foreignKey: 'userId', as: 'user' });
Installment.belongsTo(Procedure, { foreignKey: 'procedureId', as: 'procedure' });
Installment.belongsTo(Patient, { foreignKey: 'patientId', as: 'patient' });

export default Installment;