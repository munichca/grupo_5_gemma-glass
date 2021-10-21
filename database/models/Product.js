module.exports = function(sequelize, dataTypes){
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        price:{
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER(11),
        },
        categoryId: {
            type: dataTypes.INTEGER(11),
        },
        shapeId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        brandId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        materialId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        
        stock: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: true
        },
        height:{
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        width:{
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false
        }

    }
    let config = {
        tableName: "products",
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = models => {
        Product.belongsTo(models.Brand, {
            as: "brand",
            foreignKey: "brandId"
        })
        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: "categoryId",
            timestamps: false
        })
        Product.hasMany(models.productImages, {
            as: "image",
            foreignKey: "productId",
            timestamps: false
        })
        Product.belongsTo(models.Material, {
            as: "material",
            foreignKey: "materialId",
            timestamps: false
        })
        Product.belongsTo(models.Shape, {
            as: "shape",
            foreignKey: "shapeId",
            timestamps: false
        })
        Product.hasMany(models.User, {
            as: "prodUser",
            foreignKey: "lastProdId",
            timestamps: false
        })
    }

    return Product
}