import { DataTypes, Model } from 'sequelize';
import db from '.';
import { ISalleOnCredit } from '../../interfaces';

class SalleOnCredit extends Model implements ISalleOnCredit {
  public id!: number;
  public patientId!: number;
  public procedureId!: number;
  public userId!: number;
}

SalleOnCredit.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    patientId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    procedureId: {
      allowNull: false,
      unique: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
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