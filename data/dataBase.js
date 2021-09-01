const fs = require ("fs");



module.exports = {
    productos: JSON.parse(fs.readFileSync("./data/products.json", "utf-8")),
    categoria: JSON.parse(fs.readFileSync("./data/category.json", "utf-8")),
    formas: JSON.parse(fs.readFileSync("./data/subCatForma.json", "utf-8")),
    marcas: JSON.parse(fs.readFileSync("./data/subCatMarca.json", "utf-8")),
    materials: JSON.parse(fs.readFileSync("./data/subCatMaterial.json", "utf-8")),
    writeJson : (dataBase) => {
        fs.writeFileSync("./data/products.json", JSON.stringify(dataBase), "utf-8")
    }


}