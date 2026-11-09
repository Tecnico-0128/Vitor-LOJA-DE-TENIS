import  Sequelize  from 'sequelize'
import sequelize from '../config/tenisdatabase.js'

const {DataTypes} =Sequelize

const produtos = sequelize.define('produtos',{
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  produto:{
    type: DataTypes.STRING,
    allowNull:false
  },
  preco:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  tamanho:{
    type: DataTypes.INTEGER,
    allowNull:false
  },
  quantidade:{
    type:DataTypes.INTEGER,
    allowNull:false
  }
},{
    timestamps:false,
    tableName: 'produtos'
})
export default produtos