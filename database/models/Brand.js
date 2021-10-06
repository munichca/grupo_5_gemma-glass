module.exports = function(sequelize, dataTypes){
    let alias = "Brand";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
        
        
    }
    let config = {
        tableName: "brands", //No hace falta
        timestamps: false
    }

    const Brand = sequelize.define(alias, cols, config)
    Brand.associate = models => {
        Brand.belongsTo(models.Product, {
            as: "prodbrand",
            foreignKey: "brandId"
        })
    }
    
   

    return Brand
}