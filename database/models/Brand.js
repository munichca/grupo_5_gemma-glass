module.exports = function(sequelize, dataTypes){
    let alias = "Brand";
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
        }
    }
    let config = {
        tableName: "brands", //No hace falta
        timestamps: false
    }

    const Brand = sequelize.define(alias, cols, config)
    Brand.associate = models => {
        Brand.hasMany(models.Product, {
            as: "prodbrand",
            foreignKey: "brandId",
            timestamps: false
        })
    }
    
   

    return Brand
}