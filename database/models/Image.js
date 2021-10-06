module.exports = function(sequelize, dataTypes){
    let alias = "Images";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        images: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
        
        
    }
    let config = {
        tableName: "images", //No hace falta
        timestamps: false
    }

    const Image = sequelize.define(alias, cols, config)
    Image.associate = models => {
        Image.belongsTo(models.Product, {
            as: "prodimage",
            foreignKey: "imageId"
        })
    }
    
   

    return Image
}