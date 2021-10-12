module.exports = function(sequelize, dataTypes){
    let alias = "Material";
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
        tableName: "materials", //No hace falta
        timestamps: false
    }

    const Material = sequelize.define(alias, cols, config)
    Material.associate = models => {
        Material.hasMany(models.Product, {
            as: "prodmaterial",
            foreignKey: "materialId",
            timestamps:false
        })
    }
    
   

    return Material
}