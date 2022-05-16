const {Sequelize, sequelize, DataTypes, Model} = require('./db');

// TODO - define the Band model
class Board extends Model {};
Board.init({type: DataTypes.STRING, description: DataTypes.STRING, rating: DataTypes.NUMBER}, {sequelize})

module.exports = {
    Board
};