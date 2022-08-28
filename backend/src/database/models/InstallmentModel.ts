import { DataTypes, Model } from 'sequelize';
import db from '.';
import { IInstallment } from '../../interfaces/IModels';
import Patient from './PatientModel';
import Procedure from './ProcedureModel';
import SalleOnCredit from './SalleOnCreditModel';

class Installment extends Model implements IInstallment {
  public id!: number;
  public salleId!: number;
  public maturity!: any;
  public value!: number;
  public status!: string;
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
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
    tableName: 'installments',
  },
);

Procedure.belongsToMany(Installment, {
  foreignKey: 'procedureId',
  otherKey: 'installmentId',
  through: SalleOnCredit,
  as: 'procedure',
});

Patient.belongsToMany(Installment, {
  foreignKey: 'patientId',
  otherKey: 'installmentId',
  through: SalleOnCredit,
  as: 'patient',
});

export default Installment;