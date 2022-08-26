import { DataTypes, Model } from 'sequelize';
import db from '.';
import { ISalleOnCredit } from '../../interfaces/IModels';
import Patient from './PatientModel';
import Procedure from './ProcedureModel';
import Installment from './InstallmentModel';

class SalleOnCredit extends Model implements ISalleOnCredit {
  public installmentId!: number;
  public patientId!: number;
  public procedureId!: number;
  public userId!: number;
};

SalleOnCredit.init(
  {
    installmentId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    patientId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    procedureId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
    tableName: 'salles_on_credit',
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

export default SalleOnCredit;