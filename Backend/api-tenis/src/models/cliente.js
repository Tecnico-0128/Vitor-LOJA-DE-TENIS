import  Sequelize  from 'sequelize'
import sequelize from '../config/tenisdatabase.js'

const {DataTypes} =Sequelize

const clientes = sequelize.define('clientes',{
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  nome:{
    type: DataTypes.TEXT,
    allowNull:false
  },
  cpf:{
    type:DataTypes.TEXT,
    unique:true
  },
   telefone:{
    type:DataTypes.TEXT,
    allowNull:false
   },
    timestamps:false,
    tableName: 'clientes'
})
export default clientes