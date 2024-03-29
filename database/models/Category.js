module.exports = function(sequelize, dataTypes){
    let alias = "Category";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: true
        }
        
        
    }
    let config = {
        tableName: "categories", //No hace falta
        timestamps: false
    }

    const Category = sequelize.define(alias, cols, config)
    Category.associate = models => {
        Category.hasMany(models.Product, {
            as: "prodcategory",
            foreignKey: "categoryId",
            timestamps: false
        })
    }
    
   

    return Category
}