import { DataTypes, Model } from 'sequelize';
import db from '.';
import { ISalleOnCredit } from '../../interfaces/IModels';

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

export default SalleOnCredit;