module.exports = function(sequelize, dataTypes){
    let alias = "Color";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        tipo: {
            type: dataTypes.STRING(25),
        },
        header: {
            type: dataTypes.STRING(25),
        }
    }
    let config = {
        tableName: "colors", //No hace falta
        timestamps: false
    }

    const Color = sequelize.define(alias, cols, config)
    Color.associate = models => {
        Color.hasMany(models.User, {
            as: "colorId",
            foreignKey: "colorId",
            timestamps: false
        })
    }
    
   

    return Color
}