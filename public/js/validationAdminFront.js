function qs(element) {
  return document.querySelector(element);
}
let  $sbmSection = qs(".sbmSection"),
$shape = qs("#shapes1"),
$brand = qs(".brand1"),
$material = qs(".material1"),
$navUsers = qs("#navUsers"),
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
$subCatSection = qs(".subCatSection"),
$subCatInput = qs(".subCatInput"),
$titleModal =qs(".titleModal"),
$rojo = qs(".rojo"),
$form = qs("#form");
$ExpRegCantString = /^\D*\d{3}$/;

window.addEventListener("load", function () {
    $mutton.addEventListener("click", function(){
        let inputChecked = document.querySelector('input[type="radio"]:checked');
        switch ("850") {
          case $shape.style.fontWeight :
              switch("none"){
                case $btnAdd.style.pointerEvents:
                
                    $form.setAttribute("action", "/apis/shape/");
                    $form.setAttribute("method", "POST");
                    $form.submit();
                    
                  
                  /* $form.setAttribute("action", "/apis/shape/");
                  $form.setAttribute("method", "POST"); */
                  
                break;
                case $btnEdit.style.pointerEvents:
                  $form.setAttribute("action", `/apis/sedit/"${inputChecked.value}"?_method=PUT`);
                  $form.setAttribute("method", "POST");
                  $form.submit()
                break;
              }
          break;
          
          case $brand.style.fontWeight :
              switch("none"){
                case $btnAdd.style.pointerEvents:
                  $form.setAttribute("action", "/apis/brand/");
                  $form.setAttribute("method", "POST");
                  $form.submit()
                break;
                case $btnEdit.style.pointerEvents:
                  $form.setAttribute("action", `/apis/bedit/"${inputChecked.value}"?_method=PUT`);
                  $form.setAttribute("method", "POST");
                  $form.submit()
                break;
              }
          break;
          case $material.style.fontWeight :
              switch("none"){
                case $btnAdd.style.pointerEvents:
                  $form.setAttribute("action", "/apis/material/");
                  $form.setAttribute("method", "POST");
                  $form.submit()
                break;
                case $btnEdit.style.pointerEvents:
                  $form.setAttribute("action", `/apis/medit/"${inputChecked.value}"?_method=PUT`);
                  $form.setAttribute("method", "POST");
                  $form.submit()
                break;
              }
          break;
          default :
      }
      if ($btnDel.style.pointerEvents==="none"){   
        let body = document.getElementsByTagName("body")[0];
        let modalWindow = document.getElementById("tvesModalDel");
               modalWindow.style.opacity = "1";
               modalWindow.style.visibility = "visible";
               modalWindow.style.transform = "translateY(22%)";
               modalWindow.style.transitionDelay = "0.2s";
               modalWindow.style.transition = "all 0.5s cubic-bezier(0.51, 0.92, 0.24, 1.15)";
               body.style.position = "static";
               body.style.height = "100%";
               body.style.overflow = "hidden";
           window.onclick = function(event) {
              if (event.target == modalWindow) {
                  modalWindow.style.opacity = "";
                  modalWindow.style.visibility = "hidden";
                  modalWindow.style.transform = "translateY(0)";
                  body.style.position = "inherit";
                  body.style.height = "auto";
                  body.style.overflow = "visible";
              }
          }
          let whis =  document.getElementsByName("whi");
          let labelText = document.querySelectorAll(".textSubC");
          let whisResult = [].slice.call(whis);
          let labelResult = [].slice.call(labelText);
          for (i = 0 ; i<=whisResult.length; i++){
            if(whisResult[i].checked == true){
              $titleModal.innerHTML= `¿ Está seguro de querer eliminar ${labelResult[i].textContent} ?`;
            }}
        }
      })
    $btnEliminar.addEventListener("click", function () {
      
      let inputChecked = document.querySelector('input[name="whi"]:checked');
      switch("850"){
        case $shape.style.fontWeight:
          $form.setAttribute("action", `/apis/sdelete/"${inputChecked.value}"?_method=DELETE`);
          $form.setAttribute("method", "POST");
          $form.submit()
        break;
        case $brand.style.fontWeight:
          $form.setAttribute("action", `/apis/bdelete/"${inputChecked.value}"?_method=DELETE`);
          $form.setAttribute("method", "POST");
          $form.submit()
        break;
        case $material.style.fontWeight:
          $form.setAttribute("action", `/apis/mdelete/"${inputChecked.value}"?_method=DELETE`);
          $form.setAttribute("method", "POST");
          $form.submit()
        break;
      }
    })


/* ############################################################# */    
/*
$form.addEventListener('submit',function(event){
    let error = false;
    event.preventDefault()
    for (let i = 0; i < elementosForm.length; i++) {
        if(elementosForm[i].value == "" && elementosForm[i].name !== "archivos"){
            elementosForm[i].classList.add('is-invalid');
            $submitErrors.innerHTML = "Los campos señalados son obligatorios";
            error = true;
        }
    }
    if(!error){
        console.log('Todo bien');
        $form.submit()
    }
});
*/
/* ############################################################# */    
})