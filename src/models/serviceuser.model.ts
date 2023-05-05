"use strict";
import * as Sequelize from "sequelize";
import { Model, UUIDV4 } from "sequelize";
import { ServiceAttributes } from "types/serviceuser/serviceuser.model.types";
import { NumberDataType } from './../../node_modules/sequelize/types/data-types.d';

module.exports = (sequelize: any, DataTypes: any) => {
  class Serviceuser
    extends Model<ServiceAttributes>
    implements ServiceAttributes
  {
    id?: number;
    service_cid?: number;
    service_date?: Date;
    created_date?: Date;
    updated_date?: Date;
    status?: number;
    admin_id?: number;
    static associate(models: any) {
      // define association here

    }
  }
  Serviceuser.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      service_cid:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      service_date:{
        type: DataTypes.DATE,
      },
      status:{
        type: DataTypes.STRING,
      },
      admin_id: {
        type: DataTypes.INTEGER,
      }
    },
    {
      sequelize,
      modelName: "Serviceuser",
      timestamps:true,
    }
  );
  return Serviceuser;
};