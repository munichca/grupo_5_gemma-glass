function qs(element) {
    return document.querySelector(element);
  }
function bn(element) {
    return document.getElementsByName(element);
  }
  window.addEventListener("load", function () {
    let $price1 = bn("price"),
        $height1 = bn("height"),
        $width1 = bn("width"),
        $form = qs("#form"),
        $preview = qs("#img-preview"),
        $archivos1 = bn('archivos'),
        $archivos = qs('.archivos'),
        $cleanImages = qs(".cleanImages"),
        $submitErrors = qs("#submitErrors"),
        regExNum = /^[+]?((\d+(\.\d*)?)|(\.\d+))$/;
        elementosForm = document.getElementsByClassName("clean");
        
    $price1[0].addEventListener('blur', function() {
        switch (true) {
            case !$price1[0].value.trim():
                $price1[0].placeholder= "Debe cargar el precio";
                $price1[0].classList.add('is-invalid');
                break;
            case !regExNum.test($price1[0].value):
                $price1[0].value = "";
                $price1[0].placeholder= "El campo debe ser numérico, ej. 10.5";
                $price1[0].classList.add('is-invalid');
                break;
            default:
                $price1[0].classList.remove('is-invalid');
                $price1[0].classList.add('is-valid');
                break;
        }
    });
    $height1[0].addEventListener('blur', function() {
        switch (true) {
            case !$height1[0].value.trim():
                $height1[0].placeholder= "Debe indicar el alto del lente";
                $height1[0].classList.add('is-invalid');
                break;
            case !regExNum.test($height1[0].value):
                $height1[0].value = "";
                $height1[0].placeholder= "El campo debe ser numérico";
                $height1[0].classList.add('is-invalid');
                break;
            default:
                $height1[0].classList.remove('is-invalid');
                $height1[0].classList.add('is-valid');
                break;
        }
    });
    $width1[0].addEventListener('blur', function() {
        switch (true) {
            case !$width1[0].value.trim():
                $width1[0].placeholder= "Debe indicar el ancho del lente";
                $width1[0].classList.add('is-invalid');
                break;
            case !regExNum.test($width1[0].value):
                $width1[0].value = "";
                $width1[0].placeholder= "El campo debe ser numérico";
                $width1[0].classList.add('is-invalid');
                break;
            default:
                $width1[0].classList.remove('is-invalid');
                $width1[0].classList.add('is-valid');
                break;
        }
    });

$archivos1[0].addEventListener("change", function(){
    if (this.files.length <= 3) {
    if (this.files) {[].forEach.call(this.files, readAndPreview);}
function readAndPreview(file) {
    $preview.innerHTML = "";
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
}}else{
    alert("solo tres imagenes")
    $archivos1[0].value="";
}
});  
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
        /* console.log('Todo bien'); */
        $form.submit()
    }
});
$cleanImages.onclick = () =>{
$preview.innerHTML = "";
$archivos1[0].value = "";
}
$price1[0].addEventListener("click", function(){
    $price1[0].placeholder= "";
    $price1[0].classList.remove('is-invalid');
    $price1[0].classList.remove('is-valid');
});
$height1[0].addEventListener("click", function(){
    $height1[0].placeholder= "";
    $height1[0].classList.remove('is-invalid');
    $height1[0].classList.remove('is-valid');
});
$width1[0].addEventListener("click", function(){
    $width1[0].placeholder= "";
    $width1[0].classList.remove('is-invalid');
    $width1[0].classList.remove('is-valid');
})
});