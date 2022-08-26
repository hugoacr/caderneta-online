import { DataTypes, Model } from 'sequelize';
import db from '.';
import { IPatient } from '../../interfaces';

class Patient extends Model implements IPatient {
  public id!: number;
  public name!: string;
  public address!: string;
  public phoneNumber!: string;
}

Patient.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
    tableName: 'patients',
  },
);

export default Patient;