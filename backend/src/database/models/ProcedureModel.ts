import { DataTypes, Model } from 'sequelize';
import db from '.';
import { IProcedure } from '../../interfaces';

class Procedure extends Model implements IProcedure {
  public id!: number;
  public name!: string;
  public price!: number;
};

Procedure.init(
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
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL(10, 2),
    },
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
    tableName: 'procedures',
  },
);

export default Procedure;