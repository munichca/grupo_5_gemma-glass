function qs(element) {
  return document.querySelector(element);
}
window.addEventListener("load", function () {
  let $sbmSection = qs(".sbmSection"),
    $shape = qs("#shapes1"),
    $brand = qs(".brand1"),
    $material = qs(".material1"),
    $navUsers = qs("#navUsers1"),
    $checkUser = qs(".checkUser"),
    $contSubCat = qs(".contSubCat"),
    $mutton = qs(".masterButton"),
    $subCatLabel = qs(".subCatLabel"),
    $titleChoose = qs(".titleChoose"),
    $btnAdd = qs(".btnAdd1"),
    $btnEdit = qs(".btnEdit1"),
    $btnDel = qs(".btnDel1"),
    $subCatEntry = qs(".subCatEntry"),
    $subCatSection2 = qs(".subCatSection2"),
    $btnEliminar = qs(".btnEliminar"),
    /* $subCatSection = qs(".subCatSection"), */
    $subCatInput = qs(".subCatInput"),
    $titleModal = qs(".titleModal"),
    $rojo = qs(".rojo"),
    $form = qs("#form");
    regExAlphaNumeric = /^[A-Za-z\ñáéíóúü\0-9\s]{3,254}$/;
    
    fillFields("shape");
    $shape.addEventListener("click", function () {
      $contSubCat.innerHTML="";
      $subCatSection2.style.pointerEvents = "none";
      $subCatSection2.style.opacity = "0.7";
      $shape.style.fontWeight = "850";
      $shape.style.pointerEvents = "none";
      $brand.style.fontWeight = "unset";
      $material.style.fontWeight = "unset";
      $brand.style.pointerEvents = "inherit";
      $material.style.pointerEvents = "inherit";
      $material.style.fontWeight = "unset";
      $subCatLabel.innerHTML = "";
      $titleChoose.innerHTML = "Seleccione la accion a ejecutar con la Forma";
      $mutton.style.pointerEvents = "none";
      $mutton.innerHTML = "Aceptar";
      fillFields("shape");
      showingBtn();
    });
    $brand.addEventListener("click", function () {
      $contSubCat.innerHTML="";
      $shape.style.fontWeight = "unset";
      $brand.style.fontWeight = "850";
      $material.style.fontWeight = "unset";
      $shape.style.pointerEvents = "inherit";
      $brand.style.pointerEvents = "none";
      $material.style.pointerEvents = "inherit";
      $subCatLabel.innerHTML = "";
      $titleChoose.innerHTML = "Seleccione la accion a ejecutar con la Marca";
      $mutton.style.pointerEvents = "none";
      fillFields("brand");
      showingBtn();
    });
    $material.addEventListener("click", function () {
      $contSubCat.innerHTML="";
      $shape.style.fontWeight = "unset";
      $brand.style.fontWeight = "unset";
      $material.style.fontWeight = "850";
      $shape.style.pointerEvents = "inherit";
      $brand.style.pointerEvents = "inherit";
      $material.style.pointerEvents = "none";
      $subCatLabel.innerHTML = "";
      $titleChoose.innerHTML ="Seleccione la accion a ejecutar con el Material";
      $mutton.style.pointerEvents = "none";
      fillFields("material");
      showingBtn();
    });
    $contSubCat.addEventListener("click", function () {
      let whis = document.getElementsByName("whi");
      let labelText = document.querySelectorAll(".textSubC");
      let whisResult = [].slice.call(whis);
      let labelResult = [].slice.call(labelText);
      for (i = 0; i <= whisResult.length; i++) {
        if (whisResult[i].checked == true) {
          $subCatInput.value = labelResult[i].textContent;
        }
      }
    });
    $btnAdd.addEventListener("click", function () {
      if (document.querySelector('input[name="whi"]:checked')) {
        document.querySelector('input[name="whi"]:checked').checked = false;
      }
      if ($shape.style.fontWeight === "850") {
        $titleChoose.innerHTML = "Agregue la nueva Forma";
        $subCatLabel.textContent = "Ingrese el nombre de la nueva Forma";
      }
      if ($brand.style.fontWeight === "850") {
        $titleChoose.innerHTML = "Agregue la nueva Marca";
        $subCatLabel.textContent = "Ingrese el nombre de la nueva Marca";
      }
      if ($material.style.fontWeight === "850") {
        $titleChoose.innerHTML = "Agregue el nuevo Material";
        $subCatLabel.textContent = "Ingrese el nombre del nuevo Material";
      }
      $subCatEntry.style.display = "flex";
      $mutton.innerHTML = "Agregar";
      $mutton.style.pointerEvents = "inherit";
      $btnAdd.style.pointerEvents = "none";
      $btnAdd.style.opacity = "0.7";
      $btnEdit.style.pointerEvents = "inherit";
      $btnEdit.style.opacity = "1";
      $btnDel.style.pointerEvents = "inherit";
      $btnDel.style.opacity = "1";
      
      $subCatSection2.style.pointerEvents = "inherit";
      $subCatSection2.style.opacity = "1";
      $subCatInput.value = "";
      $subCatInput.focus();
      hiding();
    });
    $btnEdit.addEventListener("click", function () {
      if ($shape.style.fontWeight === "850") {
        $titleChoose.innerHTML = "Seleccione la Forma a Editar";
        $subCatLabel.textContent = "Modifique el nombre de la Forma";
      }
      if ($brand.style.fontWeight === "850") {
        $titleChoose.innerHTML = "Seleccione la Marca a Editar";
        $subCatLabel.textContent = "Modifique el nombre de la Marca";
      }
      if ($material.style.fontWeight === "850") {
        $titleChoose.innerHTML = "Seleccione el Material a Editar";
        $subCatLabel.textContent = "Modifique el nombre del Material";
      }
      $subCatInput.value = "";
      $subCatEntry.style.display = "flex";
      $mutton.innerHTML = "Editar";
      $btnAdd.style.pointerEvents = "inherit";
      $btnAdd.style.opacity = "1";
      $btnEdit.style.pointerEvents = "none";
      $btnEdit.style.opacity = "0.7";
      $btnDel.style.pointerEvents = "inherit";
      $btnDel.style.opacity = "1";
      $mutton.style.pointerEvents = "inherit";
      $subCatSection2.style.pointerEvents = "inherit";
      $subCatSection2.style.opacity = "1";
      showing();
    });
    $btnDel.addEventListener("click", function () {
      document.querySelector('input[name="whi"]').checked = true;
      if ($shape.style.fontWeight === "850") {
        $titleChoose.innerHTML = "Seleccione la Forma a Eliminar";
      }
      if ($brand.style.fontWeight === "850") {
        $titleChoose.innerHTML = "Seleccione la Marca a Eliminar";
      }
      if ($material.style.fontWeight === "850") {
        $titleChoose.innerHTML = "Seleccione el Material a Eliminar";
      }
      $subCatInput.value = "";
      $subCatEntry.style.display = "none";
      $mutton.innerHTML = "Eliminar";
      $mutton.style.pointerEvents = "inherit";
      $btnAdd.style.pointerEvents = "inherit";
      $btnAdd.style.opacity = "1";
      $btnEdit.style.pointerEvents = "inherit";
      $btnEdit.style.opacity = "1";
      $btnDel.style.pointerEvents = "none";
      $btnDel.style.opacity = "0.7";
      $subCatSection2.style.pointerEvents = "inherit";
      $subCatSection2.style.opacity = "1";
      showing();
    });
    $subCatInput.addEventListener("focus", function(){
      if ($rojo.textContent!=""){
        
      }
    })
    $mutton.addEventListener("click", function (e) {
      $rojo.innerHTML=""
      var flag = $subCatInput.value.trim();
      var shape ="shape";
      switch ("850") {
        case $shape.style.fontWeight:
          switch ("none") {
            case  $btnAdd.style.pointerEvents:
              validation1("shape",flag, "shape");
              
              break;
            case $btnEdit.style.pointerEvents:
              validation1("shape",flag, "sedit");
              break;
            case $btnDel.style.pointerEvents:
              
              break;
          }
          break;
        case $brand.style.fontWeight:
          switch ("none") {
            case  $btnAdd.style.pointerEvents:
              validation1("brand",flag);
              break;
            case $btnEdit.style.pointerEvents:
              validation1("brand",flag);
              break;
            case $btnDel.style.pointerEvents:
              
              break;
          }
          break;
        case $material.style.fontWeight:
          switch ("none") {
            case  $btnAdd.style.pointerEvents:
              validation1("material",flag);
              break;
            case $btnEdit.style.pointerEvents:
              validation1("material",flag);
              break;
            case $btnDel.style.pointerEvents:
              
              break;
          };
          break;
        default:
      }
      if ($btnDel.style.pointerEvents === "none") {
        let body = document.getElementsByTagName("body")[0];
        let modalWindow = document.getElementById("tvesModalDel");
        modalWindow.style.opacity = "1";
        modalWindow.style.visibility = "visible";
        modalWindow.style.transform = "translateY(22%)";
        modalWindow.style.transitionDelay = "0.2s";
        modalWindow.style.transition =
          "all 0.5s cubic-bezier(0.51, 0.92, 0.24, 1.15)";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
        window.onclick = function (event) {
          if (event.target == modalWindow) {
            modalWindow.style.opacity = "";
            modalWindow.style.visibility = "hidden";
            modalWindow.style.transform = "translateY(0)";
            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
          }
        };
        let whis = document.getElementsByName("whi");
        let labelText = document.querySelectorAll(".textSubC");
        let whisResult = [].slice.call(whis);
        let labelResult = [].slice.call(labelText);
        for (i = 0; i <= whisResult.length; i++) {
          if (whisResult[i].checked == true) {
            $titleModal.innerHTML = `¿ Está seguro de querer eliminar ${labelResult[i].textContent} ?`;
          }
        }
      }
    });


    function fillFields(subCat) {
      fetch(`http://localhost:3005/apis/${subCat}`)
        .then((response) => response.json())
        .then((result) => {
          for (let i = 0; i < result.data.length; i++) {
            $contSubCat.innerHTML += `<div class="contSubC" id="contSubC${result.data[i].id}"></div>`;
            let div = document.querySelector(`#contSubC${result.data[i].id}`);
            div.innerHTML += `<label class="textSubC" for="">${result.data[i].name}</label>`;
            div.innerHTML += `<input class="inputSunC" type="radio" name="whi" value="${result.data[i].id}" for="">`;
          }
          
      
        });
    }
    function hiding() {
      var whis = document.getElementsByName("whi");
      var labelText = document.querySelectorAll(".textSubC");
      var whisResult = [].slice.call(whis);
      var labelResult = [].slice.call(labelText);
      for (i = 0; i <= whisResult.length; i++) {
        console.log(whisResult[i])
        if (whisResult[i].style.pointerEvents != "none"){
          whisResult[i].style.pointerEvents = "none";
          labelResult[i].style.opacity = "0.7";
        }
      }
    }
    function showingBtn() {
      if ($rojo.textContent.trim()) {
        $rojo.innerHTML = "";}
      $mutton.innerHTML = "Aceptar";
      $subCatInput.value = "";
      $subCatEntry.style.display = "flex";
      $sbmSection.style.display = "flex";
      $contSubCat.innerHTML = "";
      let arrayAddEditDel = document.querySelectorAll(".itemA");
      let threeAction = [].slice.call(arrayAddEditDel);
      for (i = 0; i <= threeAction.length; i++) {
        threeAction[i].style.pointerEvents = "inherit";
        threeAction[i].style.opacity = "1";
      } }
      function showing() {
        if ($rojo.textContent.trim()) {
          $rojo.innerHTML = "";
        }
        let whis = document.getElementsByName("whi");
        let labelText = document.querySelectorAll(".textSubC");
        let whisResult = [].slice.call(whis);
        let labelResult = [].slice.call(labelText);
        for (i = 0; i <= whisResult.length; i++) {
          whisResult[i].style.pointerEvents = "inherit";
          whisResult[i].checked = false;
          labelResult[i].style.opacity = "1";
        }
        return;
      }


      function  addSubCat(route, name){
        fetch("http://localhost:3005/apis/"+route,{
          method:"POST",
                  headers: {
                       "Content-Type" : "application/json" },
                  body: JSON.stringify(
                   {
                      "name":name
                   }
                  )
              })
              .then((response) => response.json())
              .then((result) =>{
                  if (result.status == 1){
                      alert("La forma se agregó")
                  }else{
                      alert("La forma NO se agregó")
                  }
                 
              })
      }
      function validation1(subCat, flag, route){
        switch (true) {
          case $btnAdd.style.pointerEvents==="none":
            fetch(`http://localhost:3005/apis/${subCat}/${flag}`)
            .then((response) => response.json())
            .then((subCatFinded) => {
              if (subCatFinded.data !== null){
                $rojo.innerHTML = "El nombre ya existe front";
                $subCatInput.focus();
              }
            })
          break;
          case !$subCatInput.value.trim():
              $rojo.innerHTML = "El campo no puede estar vacio front";
              $subCatInput.focus();
          break;
          case !regExAlphaNumeric.test(flag):
              $rojo.innerHTML ="El campo debe tener al menos tres caracteres front";
              $subCatInput.focus();
          break;
          
          default:
            alert("sdasda")
          break;
        }
        
      }
      
        






     
})
