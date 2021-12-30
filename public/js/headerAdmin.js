function qs(element) {
    return document.querySelector(element)
}

let c1 = qs(".c1");
let c2 = qs(".c2");
let c3 = qs(".c3");
let c4 = qs(".c4");
/* c1.style.border = "none"
c2.style.border = "none"    
c3.style.border = "none"    
c4.style.border = "none"  */
function mostrar() {
    let x = document.getElementById("buscador");
    let lupa = document.getElementById("lupa");
    let search_2 = document.getElementById("search_2")
    if (x.style.display === "block") {
        x.style.display = "none";
        lupa.style.cursor = "pointer";
        lupa.style.pointerEvents = "initial"
        lupa.style.opacity = "1";


    } else {
        x.style.display = "block";
        lupa.style.opacity = "0";
        lupa.style.cursor = "not-allowed";
        lupa.style.pointerEvents = "none"
        search_2.focus(); /* la funcion focus pone el cursor en el elemento al qyue se le aplica */

    }
}

/* let mId = (clicked_id);
document.cookie = "pepe=" + mId + ";" + "max-age= 3000 ; path=/";

let decodedCookie = decodeURIComponent(document.cookie);
let decodedCookie2 = decodedCookie.split(';');
let micookie = decodedCookie2[0];
var igual = micookie.indexOf("=");
var valor = micookie.substring(igual + 1); */

let $lupa1 = document.querySelector("#lupa-1")
let $search = document.querySelector(".search")
let $aca = document.querySelector("#aca")
let $result = document.querySelector(".ulMyDiv")
let $list = document.querySelector(".list");


const $searchAll = () => {
    var arrayNew = [];
    var newArray = [];
    let flag = 0;

    $result.innerHTML = ""
    fetch("http://localhost:3005/apis/products")
        .then((response) => response.json())
        .then(({ data }) => {
            let texto = $search.value.toLowerCase()
            let valor = String($search.value)

            for (let product of data) {


                if (product.name.toLowerCase().indexOf(texto) !== -1) {
                    /* for (let current of newArray) {

                    } */

                    arrayNew.push(product);
                    newArray = Array.from(arrayNew);
                }
                if (String(product.id).indexOf(valor) !== -1) {

                    arrayNew.push(product)
                    newArray = Array.from(arrayNew)
                }
                /* if (String(product.discount).indexOf(valor) !== -1) {

                    arrayNew.push(product)
                    newArray = Array.from(arrayNew)
                } */


            }
            if ($search.value === "") {
                arrayNew = [];
                newArray = [];
                refill(newArray);
            } else {
                refill(newArray);
            }

            /* console.log(newArray[0].id) */
        })

}
$search.addEventListener("keyup", $searchAll)

function refill(product) {
    console.log(product)
    $list.innerHTML = "";
    for (let i = 0; i < product.length; i++) {
        $list.innerHTML += "<div class='lista cod" + i + "' id='" + i + "' ></div>";
        let $lista = document.querySelector(".cod" + i + "");
        $lista.innerHTML += "<p class='id pe'>" + product[i].id + "</p>"
        $lista.innerHTML += "<p class='name pe'>" + product[i].name + "</p>"
        $lista.innerHTML += "<p class='price pe'>" + product[i].price + "</p>"
        $lista.innerHTML += "<p class='category pe'>" + product[i].category.name + "</p>"
        $lista.innerHTML += "<p class='shape pe'>" + product[i].shape.name + "</p>"
        $lista.innerHTML += "<p class='brand pe'>" + product[i].brand.name + "</p>"
        $lista.innerHTML += "<p class='material pe'>" + product[i].material.name + "</p>"
        $lista.innerHTML += "<p class='height pe'>" + product[i].height + "</p>"
        $lista.innerHTML += "<p class='width pe'>" + product[i].width + "</p>"
        $lista.innerHTML += "<p class='discount pe'>" + product[i].discount + "</p>"
        $lista.innerHTML += "<img class='pe editIcon ' name='editIcon' src='/image/edit.svg'  id='" + product[i].id + "'>"
        $lista.innerHTML += "<img src='/image/trash.svg' name='imgTrash'class='btnDelProd imgTrash  pe1 ' id='" + product[i].id + "' alt='" + product[i].name + "'>"

    }
}