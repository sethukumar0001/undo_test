module.exports = function(sequelize, DataTypes) {
    var posts = sequelize.define('posts', {
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
        project_desc: {
            type: DataTypes.STRING,
            allowNull: true
        },
        skills: {
            type: DataTypes.STRING,
            allowNull: true
        },

    }, {
        freezeTableName: true
    });
  
    return posts;
  }