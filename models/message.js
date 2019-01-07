module.exports = function (sequelize, DataTypes) {
    var Message = sequelize.define("Message", {
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        message: {
            type: DataTypes.TEXT,
        }
    });
    return Message;
};