module.exports = function (sequelize, DataTypes) {
    var Message = sequelize.define("Message", {
        name: {
            type: DataTypes.STRING,            
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        message: {
            type: DataTypes.TEXT,            
            validate: {
                len: [1]
            }
        }
    });
    return Message;
};