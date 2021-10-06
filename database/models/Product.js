module.exports = function(sequelize, dataTypes){
    let alias = "Product";
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
        },
        price:{
            type: dataTypes.DECIMAL(3,1),
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER(10).UNSIGNED,
        },
        categoryId: {
            type: dataTypes.INTEGER(10).UNSIGNED,
        },
        shapeId: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        brandId: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        materialId: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        imageId: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        }
    }
    let config = {
        tableName: "products", //No hace falta
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = models => {
        Product.hasMany(models.Brand, {
            as: "brand",
            foreignKey: "brandId"
        })
        Product.hasMany(models.Category, {
            as: "category",
            foreignKey: "categoryId"
        })
        Product.hasMany(models.Image, {
            as: "image",
            foreignKey: "imageId"
        })
        Product.hasMany(models.Material, {
            as: "material",
            foreignKey: "materialId"
        })
        Product.hasMany(models.Shape, {
            as: "shape",
            foreignKey: "shapeId"
        })
    }

    return Product
}