import sequelize from '../db/db'
import { DataTypes } from 'sequelize'

export const Bic = sequelize.define(
  'bic',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    bic: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    corrAccount: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
  }
)
