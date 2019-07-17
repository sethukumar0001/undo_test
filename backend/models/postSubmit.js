module.exports = function(sequelize, DataTypes) {
    var postSubmit = sequelize.define('postSubmit', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        project_title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        }
      

    }, {
        freezeTableName: true
    });
  
    return postSubmit;
  }