module.exports = function(sequelize, dataTypes){
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        lastName: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        pass: {
            type: dataTypes.INTEGER(11),
            allowNull: true
        },
        avatar: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        addressId: {
            type: dataTypes.INTEGER(11),
            allowNull: true,
        },
        phone: {
            type: dataTypes.INTEGER(11),
            allowNull: true
        },
        rol: {
            type: dataTypes.STRING(11),
            allowNull: true
        }
                
        
        
    }
    let config = {
        tableName: "users", //No hace falta
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config)
    User.associate = models => {
        User.hasMany(models.Address, {
            as: "addresses",
            foreignKey: "addressId",
            timestamps: false
        })
    }
    
   

    return User
}