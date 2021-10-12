module.exports = function(sequelize, dataTypes){
    let alias = "productImages";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        images: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        productId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
        
        
    }
    let config = {
        tableName: "productImages", //No hace falta
        timestamps: false
    }

    const Image = sequelize.define(alias, cols, config)
   
    Image.associate = models => {
        Image.belongsTo(models.Product, {
            as: "pimage",
            foreignKey: "productId",
            timestamps: false
        })
    }
    
   

    return Image
}