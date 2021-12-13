

  
  
  window.addEventListener("load", function (){
      if(document.querySelector(".pepe")){
      let $pepe=document.querySelector(".pepe")
      $pepe.addEventListener("click", function (){
        localStorage.removeItem("troleyProd")
      })
    }
    if(document.querySelector("#externalContainer")){
        let $externalContainer = document.querySelector("#externalContainer");
        $externalContainer.addEventListener("click", function(e){
            let $troley = document.getElementsByName("troley"); 
            let troleyResult = [].slice.call($troley);
            
           for (i = 0 ; i<=troleyResult.length ; i++){
              if (troleyResult[i]===e.target){
                
                fetch(`http://localhost:3005/apis/products/search/${troleyResult[i].id}`)
          .then((response) => response.json())
          .then((product) => {
            let resultado=JSON.parse(localStorage.getItem("troleyProd"))||[];
            /* console.log(product[i].image[0]) */
                !product[i].image[0]&&(product[i].image[0]="/image/productImages/logo.png")
                     
                
                resultado.push(product.data)
                console.log(resultado.length)/* eliminar despues */
                    localStorage.setItem("troleyProd", JSON.stringify(resultado));
                
                console.log(JSON.parse(localStorage.getItem("troleyProd")));/* eliminar despues */                                                                
          })
              }}
            })
    }
if (document.querySelector(".caca")){
    let $caca =document.querySelector(".caca");
    $caca.addEventListener("click", function(){
        let products=JSON.parse(localStorage.getItem("troleyProd"))||[];
        let $sect2 = document.querySelector(".sect2");
        $sect2.innerHTML="";
        for (let i=0; i<products.length; i++){
            console.log(products[i].shape.name)
            $sect2.innerHTML += `<div class="card1${products[i].id} card1" id="${products[i].id}"></div>`;
            console.log(products[i].image[0].images)
            let $card1 = document.querySelector(`.card1${products[i].id}`);
            $card1.innerHTML += `<img class="imgCard" src="/image/productImages/${products[i].image[0].images}" ></img>`;
            $card1.innerHTML += `<div class="nameProd${products[i].id} nameProd"></div>`
                let $nameProd =document.querySelector(`.nameProd${products[i].id}`)
                $nameProd.innerHTML = `<h6 class="titleCar">Nombre del Producto</h6>`
                $nameProd.innerHTML += `<span class="span1">${products[i].name}</span>`
            $card1.innerHTML += `<div class="priceProd${products[i].id} priceProd"></div>`
                let priceProd = document.querySelector(`.priceProd${products[i].id}`)
                priceProd.innerHTML = `<h6 class="titleCar">Precio</h6>`
                priceProd.innerHTML += `<span class="span2">${products[i].price}.-</span>`
            /* <div class="priceProd">
                    <h6 class="titleCar">Precio</h6>
                    <span class="span2">$0000.-</span>
                </div> */
        }
    })
}})
/* $contSubCat.innerHTML += `<div class="contSubC" id="contSubC${material.data[i].id}"></div>`
        let div = document.querySelector(`#contSubC${material.data[i].id}`)
        div.innerHTML += `<label class="textSubC" for="">${material.data[i].name}</label>`
        div.innerHTML += `<input type="radio" class="whint" name="whi" value="${material.data[i].id}" for="">` */
      /* } */
      /* ############ */