module.exports = function(sequelize, dataTypes){
    let alias = "Addresses";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        street: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        number: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },        
        city: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        number: {
          type: dataTypes.STRING(30),
          allowNull: false
        }
        
    }
    let config = {
        tableName: "Addresses", //No hace falta
        timestamps: false
    }

    const Address = sequelize.define(alias, cols, config)
    Address.associate = models => {
        Address.belongsTo(models.User, {
            as: "userAddress",
            foreignKey: "addressId",
            timestamps: false
        })
    }
    
   

    return Address
}