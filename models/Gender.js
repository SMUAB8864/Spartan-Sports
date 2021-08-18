const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class Gender extends Model {}
Gender.init({
  id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  gender_name:{
    type:DataTypes.string,
    allowNull:false,
  }
},{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'gender',
});
module.exports = Gender;
