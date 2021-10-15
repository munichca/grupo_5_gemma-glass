module.exports = function(sequelize, dataTypes){
    let alias = "User";
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
        },
        lastName: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        pass: {
            type: dataTypes.INTEGER(11),
            allowNull: true
        },
        avatar: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        address: {
            type: dataTypes.STRING(100),
            
        },
        
        phone: {
            type: dataTypes.INTEGER(11),
            allowNull: true
        },
        rol: {
            type: dataTypes.INTEGER(11),
            allowNull: true
        }
                
        
        
    }
    let config = {
        tableName: "users", //No hace falta
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config)
    
    
    
   

    return User
}