import { DataTypes, Model } from 'sequelize';
import db from '.';
import { IInstallment } from '../../interfaces';

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
    salleId: {
        allowNull: false,
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

export default Installment;