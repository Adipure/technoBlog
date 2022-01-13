const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class myComments extends Model { }
myComments.init({

 body: {
  type: DataTypes.STRING,
  allowNull: false
 }
}, { sequelize, modelName: 'myComments' })

module.exports = myComments


//users , id , 

//comments, 
//link to parent post. 