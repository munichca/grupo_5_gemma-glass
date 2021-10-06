module.exports = function(sequelize, dataTypes){
    let alias = "Material";
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
        tableName: "materials", //No hace falta
        timestamps: false
    }

    const Material = sequelize.define(alias, cols, config)
    Material.associate = models => {
        Material.belongsTo(models.Product, {
            as: "prodmaterial",
            foreignKey: "materialId"
        })
    }
    
   

    return Material
}