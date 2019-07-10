module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define('userDetails', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        mobilenumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        }, category: {
            type: DataTypes.STRING,
            allowNull: true
        }, skills: {
            type: DataTypes.STRING,
            allowNull: true
        }, qualification: {
            type: DataTypes.STRING,
            allowNull: true
        }, experience: {
            type: DataTypes.STRING,
            allowNull: true
        }, location: {
            type: DataTypes.STRING,
            allowNull: true
        },

    }, {
        freezeTableName: true
    });
  
    return user;
  }