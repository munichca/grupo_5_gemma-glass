

function qs(element) {
  return document.querySelector(element);
}

window.addEventListener("load", function () {
  let $products = qs("#products"),
    $sbmSection = qs(".sbmSection"),
    $shape = qs(".shapes"),
    $brand = qs(".brand"),
    $material = qs(".material"),
    $userSection = qs(".userSection"),
    $navUsers = qs("#navUsers"),
    $checkUser = qs(".checkUser"),
    $contSubCat = qs(".contSubCat"),
    $mutton = qs(".masterButton"),
    $subCatLabel = qs(".subCatLabel"),
    $subCatInput = qs(".subCatInput"),
    $titleChoose = qs(".titleChoose"),
    $btnAdd = qs(".btnAdd1"),
    $btnEdit = qs(".btnEdit1"),
    $btnDel = qs(".btnDel1"),
    $subCatEntry = qs(".subCatEntry"),
    $subCatSection2 = qs(".subCatSection2"),
    $form = qs("#form"),
    $mainList = qs(".mainList");

  $products.addEventListener("click", function () {
    $mainList.style.display = "flex";
    $sbmSection.style.display = "none";
    $products.style.fontWeight = "850";
    $shape.style.fontWeight = "unset";
    $brand.style.fontWeight = "unset";
    $material.style.fontWeight = "unset";
    $shape.style.pointerEvents = "inherit";
    $brand.style.pointerEvents = "inherit";
    $material.style.pointerEvents = "inherit";
  });
  
  $btnAdd.addEventListener("click", function () {
    if (document.querySelector('input[name="whi"]:checked')){
      document.querySelector('input[name="whi"]:checked').checked=false;
    }else{
      document.querySelector('input[name="whi"]').checked=false;
    }
    if ($shape.style.fontWeight === "850"){
      $titleChoose.innerHTML = "Agregue la nueva Forma";
    }
    if ($brand.style.fontWeight === "850"){
      $titleChoose.innerHTML = "Agregue la nueva Marca";
    }
    if ($material.style.fontWeight === "850"){
      $titleChoose.innerHTML = "Agregue el nuevo Material";
    }
    $subCatEntry.style.display ="flex"
    $mutton.innerHTML="Agregar";
    $btnAdd.style.pointerEvents = "none";
    $btnAdd.style.opacity = "0.7";
    $btnEdit.style.pointerEvents = "inherit";
    $btnEdit.style.opacity = "1";
    $btnDel.style.pointerEvents = "inherit";
    $btnDel.style.opacity = "1";
    $contSubCat.style.pointerEvents = "none";
    $contSubCat.style.opacity = "0.7";
    $subCatSection2.style.pointerEvents = "inherit";
    $subCatSection2.style.opacity = "1";
  });
  $btnEdit.addEventListener("click", function () {
    document.querySelector('input[name="whi"]').checked=true;
    if ($shape.style.fontWeight === "850"){
      $titleChoose.innerHTML = "Seleccione la Forma a Editar";
    }
    if ($brand.style.fontWeight === "850"){
      $titleChoose.innerHTML = "Seleccione la Marca a Editar";
    }
    if ($material.style.fontWeight === "850"){
      $titleChoose.innerHTML = "Seleccione el Material a Editar";
    }
    $subCatEntry.style.display ="flex"
    $mutton.innerHTML="Editar";
    $btnAdd.style.pointerEvents = "inherit";
    $btnAdd.style.opacity = "1";
    $btnEdit.style.pointerEvents = "none";
    $btnEdit.style.opacity = "0.7";
    $btnDel.style.pointerEvents = "inherit";
    $btnDel.style.opacity = "1";
    $contSubCat.style.pointerEvents = "inherit";
    $contSubCat.style.opacity = "1";
    $subCatSection2.style.pointerEvents = "inherit";
    $subCatSection2.style.opacity = "1";
  });
  $btnDel.addEventListener("click", function () {
    document.querySelector('input[name="whi"]').checked=true;
    if ($shape.style.fontWeight === "850"){
      $titleChoose.innerHTML = "Seleccione la Forma a Eliminar";
    }
    if ($brand.style.fontWeight === "850"){
      $titleChoose.innerHTML = "Seleccione la Marca a Eliminar";
    }
    if ($material.style.fontWeight === "850"){
      $titleChoose.innerHTML = "Seleccione el Material a Eliminar";
    }
    $subCatEntry.style.display ="none"
    $mutton.innerHTML="Eliminar";
    $btnAdd.style.pointerEvents = "inherit";
    $btnAdd.style.opacity = "1";
    $btnEdit.style.pointerEvents = "inherit";
    $btnEdit.style.opacity = "1";
    $btnDel.style.pointerEvents = "none";
    $btnDel.style.opacity = "0.7";
    $contSubCat.style.pointerEvents = "inherit";
    $contSubCat.style.opacity = "1";
    $subCatSection2.style.pointerEvents = "inherit";
    $subCatSection2.style.opacity = "1";
  });
  $shape.addEventListener("click", function () {
    $mutton.innerHTML="";
    $products.style.fontWeight = "unset";
    $subCatEntry.style.display ="flex"
    $mainList.style.display = "none";
    $btnAdd.style.pointerEvents = "inherit";
    $btnAdd.style.opacity = "1";
    $btnEdit.style.pointerEvents = "inherit";
    $btnEdit.style.opacity = "1";
    $btnDel.style.pointerEvents = "inherit";
    $btnDel.style.opacity = "1";
    $subCatSection2.style.pointerEvents = "none";
    $subCatSection2.style.opacity = "0.7";
    $sbmSection.style.display = "flex";
    $shape.style.fontWeight = "850";
    $brand.style.fontWeight = "unset";
    $material.style.fontWeight = "unset";
    $shape.style.pointerEvents = "none";
    $brand.style.pointerEvents = "inherit";
    $material.style.pointerEvents = "inherit";
    $contSubCat.style.pointerEvents = "none";
    $contSubCat.style.opacity = "0.7";
    $material.style.fontWeight = "unset";
    $subCatLabel.innerHTML = "Ingrese el nombre de la nueva Forma";
    $titleChoose.innerHTML = "Forma";
    $contSubCat.innerHTML ="";
    fetch("http://localhost:3005/apis/shape")
      .then((response) => response.json())
      .then((shape) => {
          for (let i=0; i<shape.data.length; i++){
            $contSubCat.innerHTML += `<div class="contSubC" id="contSubC${shape.data[i].id}"></div>`
            let div = document.querySelector(`#contSubC${shape.data[i].id}`)
            div.innerHTML += `<label class="textSubC" for="">${shape.data[i].name}</label>`
            div.innerHTML += `<input type="radio" name="whi" value="${shape.data[i].id}" for="">`
          }
      });
      
  });
  $brand.addEventListener("click", function () {
    $mutton.innerHTML="";
    $products.style.fontWeight = "unset";
    $subCatEntry.style.display ="flex"
    $mainList.style.display = "none";
    $sbmSection.style.display = "flex";
    $btnAdd.style.pointerEvents = "inherit";
    $btnAdd.style.opacity = "1";
    $btnEdit.style.pointerEvents = "inherit";
    $btnEdit.style.opacity = "1";
    $btnDel.style.pointerEvents = "inherit";
    $btnDel.style.opacity = "1";
    $contSubCat.style.pointerEvents = "none";
    $contSubCat.style.opacity = "0.7";
    $shape.style.fontWeight = "unset";
    $brand.style.fontWeight = "850";
    $material.style.fontWeight = "unset";
    $shape.style.pointerEvents = "inherit";
    $brand.style.pointerEvents = "none";
    $material.style.pointerEvents = "inherit";
    $subCatLabel.innerHTML = "Ingrese el nombre de la nueva Marca";
    $titleChoose.innerHTML = "Marcas";
    $contSubCat.innerHTML ="";
    fetch("http://localhost:3005/apis/brand")
      .then((response) => response.json())
      .then((brand) => {
          for (let i=0; i<brand.data.length; i++){
            $contSubCat.innerHTML += `<div class="contSubC" id="contSubC${brand.data[i].id}"></div>`
            let div = document.querySelector(`#contSubC${brand.data[i].id}`)
            div.innerHTML += `<label class="textSubC" for="">${brand.data[i].name}</label>`
            div.innerHTML += `<input type="radio" name="whi" value="${brand.data[i].id}" for="">`
          }
      });
    /* fetch("http://localhost:3005/apis/brand")
      .then((response) => response.json())
      .then((brand) => {
          for (let i=0; i<brand.data.length; i++){
            let label=document.createElement("label");
            let input=document.createElement("input");
            let div=document.createElement("div");
            label.innerHTML= brand.data[i].name;
            label.classList.add("textSubC");
            input.setAttribute("type", "radio");
            input.setAttribute("name", "whi");
            input.setAttribute("value",brand.data[i].id);
            div.appendChild(label);
            div.appendChild(input);
            div.classList.add("contSubC");
            $contSubCat.appendChild(div);
          }
      }); */
  });
  $material.addEventListener("click", function () {
    $mutton.innerHTML="";
    $products.style.fontWeight = "unset";
    $subCatEntry.style.display ="flex"
    $mainList.style.display = "none";
    $sbmSection.style.display = "flex";
    $btnAdd.style.pointerEvents = "inherit";
    $btnAdd.style.opacity = "1";
    $btnEdit.style.pointerEvents = "inherit";
    $btnEdit.style.opacity = "1";
    $btnDel.style.pointerEvents = "inherit";
    $btnDel.style.opacity = "1";
    $contSubCat.style.pointerEvents = "none";
    $contSubCat.style.opacity = "0.7";
    $shape.style.fontWeight = "unset";
    $brand.style.fontWeight = "unset";
    $material.style.fontWeight = "850";
    $shape.style.pointerEvents = "inherit";
    $brand.style.pointerEvents = "inherit";
    $material.style.pointerEvents = "none";
    $subCatLabel.innerHTML = "Ingrese el nombre del nuevo Material"
    $titleChoose.innerHTML = "Material"
    $contSubCat.innerHTML ="";
    
      fetch("http://localhost:3005/apis/material")
      .then((response) => response.json())
      .then((material) => {
          for (let i=0; i<material.data.length; i++){
            $contSubCat.innerHTML += `<div class="contSubC" id="contSubC${material.data[i].id}"></div>`
            let div = document.querySelector(`#contSubC${material.data[i].id}`)
            div.innerHTML += `<label class="textSubC" for="">${material.data[i].name}</label>`
            div.innerHTML += `<input type="radio" name="whi" value="${material.data[i].id}" for="">`
          }
      });
  });
  $navUsers.addEventListener("click", function () {
    fetch("http://localhost:3005/apis/sU/" + +$checkUser.value)
      .then((response) => response.json())
      .then((userFinded) => {
        if (userFinded.data != null) {
          /* $sbmSection.style.backgroundColor ="green" */
          alert(userFinded.data.name);
        } else {
          alert("no es super user");
        }
      });
  });
  
  $mutton.addEventListener("click", function(){
    let inputChecked = document.querySelector('input[name="whi"]:checked');
    $form.submit()
    alert(inputChecked.value)
  })
/* ############# */




});