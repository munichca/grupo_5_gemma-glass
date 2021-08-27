const fs = require ("fs");
const path = require ("path");


module.exports = {
    pruducts: JSON.parse(fs.readFileSync(path.join(__dirname, "/products.json"), "utf-8")),
    category: JSON.parse(fs.readFileSync(path.join(__dirname, "/category.json"), "utf-8")),
    subCatForma: JSON.parse(fs.readFileSync(path.join(__dirname, "/subCatForma.json"), "utf-8")),
    subCatMarca: JSON.parse(fs.readFileSync(path.join(__dirname, "/subCatMarca.json"), "utf-8")),
    subCatMaterial: JSON.parse(fs.readFileSync(path.join(__dirname, "/subCatMaterial.json"), "utf-8")),


}