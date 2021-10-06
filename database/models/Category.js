module.exports = function(sequelize, dataTypes){
    let alias = "Category";
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
        tableName: "categories", //No hace falta
        timestamps: false
    }

    const Category = sequelize.define(alias, cols, config)
    Category.associate = models => {
        Category.belongsTo(models.Product, {
            as: "prodcategory",
            foreignKey: "categoryId"
        })
    }
    
   

    return Category
}