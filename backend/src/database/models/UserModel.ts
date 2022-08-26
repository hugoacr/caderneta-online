import { DataTypes, Model } from 'sequelize';
import db from '.';
import { IUser } from '../../interfaces';

class User extends Model implements IUser {
  public id!: number;
  public name!: string;
  public login!: string;
  public password!: string;
  public role!: string;
};

User.init(
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
    login: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
    tableName: 'users',
  },
);

export default User;