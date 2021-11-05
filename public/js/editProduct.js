function qs(element) {
    return document.querySelector(element);
  }
function bn(element) {
    return document.getElementsByName(element);
  }
  
  window.addEventListener("load", function () {
    let $name = qs("#name"),
        $name1 = bn("name"),
        $price = qs("#price"),
        $price1 = bn("price"),
        $height = qs("#height"),
        $height1 = bn("height"),
        $width = qs("#width"),
        $width1 = bn("width"),
        $form = qs("#form"),
        $preview = qs("#img-preview"),
        $archivos = qs("#archivos"),
        $archivos1 = bn('archivos'),
        $cleanImages = qs(".cleanImages"),
        $submitErrors = qs("#submitErrors"),
        $cancel = qs(".cancel"),
        $formCancel =qs("#formCancel"),
        regExAlphaNumeric = /^[A-Za-z\ñáéíóúü\0-9\s]{3,10}$/,
        regExNum = /^[0-9]+(.[0-9]+)?$/;
        elementosForm = document.getElementsByClassName("clean");
        
    $name.addEventListener("blur", function () {
        switch (true) {
            case !$name1[0].value.trim() :
                $name1[0].placeholder= "El campo nombre es obligatorio";
                $name1[0].classList.add("is-invalid");
                break;
            case !regExAlphaNumeric.test($name1[0].value) :
                $name1[0].value = "";
                $name1[0].placeholder= "Deben ser tres o más caracteres";
                $name1[0].classList.add("is-invalid");
                break;
            default :
                $name1[0].classList.remove("is-invalid");
                $name1[0].classList.add("is-valid");
        }
        
    });
    /* ################################################# */
    $price.addEventListener('blur', function() {
        switch (true) {
            case !$price1[0].value.trim():
                $price1[0].placeholder= "Debe cargar el precio";
                $price.classList.add('is-invalid');
                break;
            case !regExNum.test($price.value):
                $price1[0].value = "";
                $price1[0].placeholder= "El campo debe ser numérico";
                $price.classList.add('is-invalid');
                break;
            default:
                $price.classList.remove('is-invalid');
                $price.classList.add('is-valid');
                break;
        }
    });
    /* ################################################# */
    $height.addEventListener('blur', function() {
        switch (true) {
            case !$height1[0].value.trim():
                $height1[0].placeholder= "Debe indicar el alto del lente";
                $height.classList.add('is-invalid');
                break;
            case !regExNum.test($height.value):
                $height1[0].value = "";
                $height1[0].placeholder= "El campo debe ser numérico";
                $height.classList.add('is-invalid');
                break;
            default:
                $height.classList.remove('is-invalid');
                $height.classList.add('is-valid');
                break;
        }
    });
    /* ################################################# */
    $width.addEventListener('blur', function() {
        switch (true) {
            case !$width1[0].value.trim():
                $width1[0].placeholder= "Debe indicar el ancho del lente";
                $width.classList.add('is-invalid');
                break;
            case !regExNum.test($width.value):
                $width1[0].value = "";
                $width1[0].placeholder= "El campo debe ser numérico";
                $width.classList.add('is-invalid');
                break;
            default:
                $width.classList.remove('is-invalid');
                $width.classList.add('is-valid');
                break;
        }
    });
    
  /* ################## */
  
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
       
  /* ############################################# */  

$archivos.addEventListener("change", function(){
    if (this.files) {[].forEach.call(this.files, readAndPreview);}
function readAndPreview(file) {
  if (!/\.(jpe?g|png|gif|svg)$/i.test(file.name)) {
    return alert("El archivo "+ file.name + " , no es una imagen válida");
  } 
  var reader = new FileReader();
  reader.addEventListener("load", function() {
    var image = new Image();
    image.height = 100;
    image.title  = file.name;
    image.src    = this.result;
    $preview.appendChild(image);
  });
  reader.readAsDataURL(file);
}
});
/* ############################################# */  

$cleanImages.onclick = () =>{
$preview.innerHTML = "";
$archivos1[0].value = "";
}           
  /* ############################################# */             
  $name.addEventListener("click", function(){
    $name1[0].placeholder= "";
});
$price.addEventListener("click", function(){
    $price1[0].placeholder= "";
});
$height.addEventListener("click", function(){
    $height1[0].placeholder= "";
});
$width.addEventListener("click", function(){
    $width1[0].placeholder= "";
})
$cancel.addEventListener("click", function(){
  $formCancel.submit();
})
  });