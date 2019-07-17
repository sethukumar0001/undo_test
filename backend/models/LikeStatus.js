module.exports = function(sequelize, DataTypes) {
    var like = sequelize.define('LikeStatus', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        project_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        likeStatus: {
            type: DataTypes.STRING,
            allowNull: true
        },
        
    }, {
        freezeTableName: true
    });
  
    return like;
  }