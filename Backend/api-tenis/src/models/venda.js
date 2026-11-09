import  Sequelize  from 'sequelize'
import sequelize from '../config/tenisdatabase.js'
const {DataTypes} =Sequelize

const vendas = sequelize.define('vendas',{
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  cpf:{
    type: DataTypes.TEXT,
    unique:false
  },
  nome_produto:{
     type: DataTypes.TEXT, 
     allowNull:false
  },
  quantidade:{
    type:DataTypes.INTEGER,
    allowNull:false
  }
},{
    timestamps:false,
    tableName: 'vendas'
})
export default vendas