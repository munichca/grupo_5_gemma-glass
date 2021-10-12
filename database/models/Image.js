module.exports = function(sequelize, dataTypes){
    let alias = "Image";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        image: {
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
        Image.hasMany(models.Product, {
            as: "pimage",
            foreignKey: "imageId",
            timestamps: false
        })
    }
    
   

    return Image
}