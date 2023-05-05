"use strict";
import * as Sequelize from "sequelize";
import { Model, UUIDV4 } from "sequelize";
import { AdminAttributes } from "../types/admin/admin.model.types";
import { NumberDataType } from './../../node_modules/sequelize/types/data-types.d';

module.exports = (sequelize: any, DataTypes: any) => {
  class Admin
    extends Model<AdminAttributes>
    implements AdminAttributes
  {
    id?: number;
    admin_cid?: number;
    admin_name?: string;
    status?: number;
    static associate(models: any) {
      // define association here

    }
  }
  Admin.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      admin_cid:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      admin_name:{
        type: DataTypes.STRING,
      },
      status:{
        type: DataTypes.TINYINT,
        defaultValue: 1
      },

    },
    {
      sequelize,
      modelName: "Admin",
      timestamps:true,
    }
  );
  return Admin;
};