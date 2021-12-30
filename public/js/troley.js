window.addEventListener("load", function() {
    let $sect2 = document.querySelector(".sect2");
    if (document.querySelector(".pepe")) {
        let $pepe = document.querySelector(".pepe")
        $pepe.addEventListener("click", function() {
            localStorage.removeItem("troleyProd")
        })
    }
    if (!localStorage.getItem("troleyProd")) {
        console.log("noexiste")
    } else {
        let products = JSON.parse(localStorage.getItem("troleyProd"));
        $sect2.innerHTML = "";
        for (let i = 0; i < products.length; i++) {
            $sect2.innerHTML += `<div class="card1${products[i].id} card1" id="${products[i].id}"></div>`;
            let $card1 = document.querySelector(`.card1${products[i].id}`);
            $card1.innerHTML += `<img class="imgCard" src="/image/productImages/${products[i].image.length=== 0?'logo.png':products[i].image[0].images}" ></img>`;
            $card1.innerHTML += `<div class="nameProd${products[i].id} nameProd"></div>`
            let $nameProd = document.querySelector(`.nameProd${products[i].id}`)
            $nameProd.innerHTML = `<h6 class="titleCar">Nombre del Producto</h6>`
            $nameProd.innerHTML += `<span class="span1">${products[i].name}</span>`
            $card1.innerHTML += `<div class="priceProd${products[i].id} priceProd"></div>`
            let priceProd = document.querySelector(`.priceProd${products[i].id}`)
            priceProd.innerHTML = `<h6 class="titleCar">Precio</h6>`
            priceProd.innerHTML += `<span class="span2">${products[i].price}.-</span>`
            $card1.innerHTML += `<div class="discountProd${products[i].id} discountProd"></div>`
            let discountProd = document.querySelector(`.discountProd${products[i].id}`)
            discountProd.innerHTML = `<h6 class="titleCar">Descuento</h6>`
            discountProd.innerHTML += `<span class="span2">${products[i].discount}%.-</span>`
            $card1.innerHTML += `<div class="cantProd${products[i].id} cantProd"></div>`
            let cantProd = document.querySelector(`.cantProd${products[i].id}`)
            cantProd.innerHTML = `<h6 class="titleCar">Cantidad</h6>`
            cantProd.innerHTML += `<div class="masMenos${products[i].id} masMenos">`
            let masMenos = document.querySelector(`.masMenos${products[i].id}`)
            masMenos.innerHTML = `<i class="far icon-menos${products[i].id} icon-menos"  ></i>`
            masMenos.innerHTML += `<input class="inputCant${products[i].id} inputCant" type="text" name="inputCant${products[i].id}"  value="1">`
            masMenos.innerHTML += `<i class="far icon-mas${products[i].id} icon-mas"></i>`
            $card1.innerHTML += `<div class="endProd${products[i].id} endProd">`
            let endProd = document.querySelector(`.endProd${products[i].id}`)
            endProd.innerHTML = `<div class="subTotal${products[i].id} subTotal">`
            let subTotal = document.querySelector(`.subTotal${products[i].id}`)
            subTotal.innerHTML = `<h6 class="titleCar">Sub Total</h6>`
            let $inputCant = document.querySelector(`.inputCant${products[i].id}`)
            let $subTolal = +products[i].price * +$inputCant.value
                //console.log($inputCant.value)
            subTotal.innerHTML += `<span class="span3">$${$subTolal}.-</span>`
            endProd.innerHTML += `<i class="far fa-trash-alt"></i>`
        }
    }
    let $caca = document.querySelector(".caca")
    $caca.addEventListener("click", function() {
            let $inputCant = document.querySelector(".inputCant116");
            $inputCant.value = 3
        })
        /* #################### */
    $sect2.addEventListener("click", function(e) {
            let $menos = document.querySelectorAll(".icon-menos");
            let $mas = document.querySelectorAll(".icon-mas");
            let menosResult = [].slice.call($menos);
            let masResult = [].slice.call($mas);
            for (let i = 0; i < menosResult.length; i++) {
                const element = menosResult[i];
                if (element === e.target) {
                    if (element.nextSibling.value > 1) {
                        element.nextSibling.value = +element.nextSibling.value - 1
                    }
                }
            }
            for (let i = 0; i < masResult.length; i++) {
                const element = masResult[i];
                if (element === e.target) {
                    element.previousSibling.value = +element.previousSibling.value + 1
                }
            }

        })
        /* usar evento change del input para actualizar el subtotal */
})