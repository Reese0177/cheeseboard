const {Sequelize, sequelize, DataTypes, Model} = require('./db');

// TODO - define the Band model
class User extends Model {};
User.init({name: DataTypes.STRING, email: DataTypes.STRING}, {sequelize})

module.exports = {
    User
};