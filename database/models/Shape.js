module.exports = function(sequelize, dataTypes){
    let alias = "Shape";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
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
        tableName: "shapes", //No hace falta
        timestamps: false
    }

    const Shape = sequelize.define(alias, cols, config)
    Shape.associate = models => {
        Shape.hasMany(models.Product, {
            as: "prodshape",
            foreignKey: "shapeId",
            timestamps: false
        })
    }
    
   

    return Shape
}