const fs = require ("fs");
const path = require ("path");


module.exports = {
    productos: JSON.parse(fs.readFileSync(path.join(__dirname, "/products.json"), "utf-8")),
    categoria: JSON.parse(fs.readFileSync(path.join(__dirname, "/category.json"), "utf-8")),
    formas: JSON.parse(fs.readFileSync(path.join(__dirname, "/subCatForma.json"), "utf-8")),
    marcas: JSON.parse(fs.readFileSync(path.join(__dirname, "/subCatMarca.json"), "utf-8")),
    materials: JSON.parse(fs.readFileSync(path.join(__dirname, "/subCatMaterial.json"), "utf-8")),
    writeJson : (dataBase) => {
        fs.writeFileSync(`./data/products.json`, JSON.stringify(dataBase), "utf-8")
    }


}