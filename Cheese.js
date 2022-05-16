const {Sequelize, sequelize, DataTypes, Model} = require('./db');

// TODO - define the Band model
class Cheese extends Model {};
Cheese.init({title: DataTypes.STRING, description: DataTypes.STRING}, {sequelize})

module.exports = {
    Cheese
};