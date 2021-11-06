function qs(element) {
  return document.querySelector(element)
}

let $form = qs ('#form')
let $avatar = qs ('#examinar')
let $errorImagen = qs('#errorImagen')
let $nombre = qs('#nombre')
let $errorNombre = qs('#errorNombre')
let $apellido= qs('#apellido')
let $errorApellido= qs('#errorApellido')
let $telefono= qs('#telefonoEdit')
let $errorTelefono= qs('#errorTelefono')
let $direccion= qs('#direccionEdit')
let $errorDireccion= qs('#errorDireccion')
let $codigoPostal= qs('#cp')
let $errorCp= qs('#errorCp')
let $ciudad= qs('#city')
let $errorCiudad= qs('#errorCiudad')
let $provincia= qs('#prov')
let $errorProvincia= qs('#errorProvincia')

let $error= qs('#errorSumbit')
regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/
regExphone = /^[0-9]{10,12}$/,
regExpCp = /^[0-9]{4,5}$/,
regExAddress = /^[#.0-9a-zA-Z\s,-]+$/;

let validationsErrors= false


window.addEventListener('load', ()=>{
  $nombre.addEventListener('change',function(){
    switch (true) {
      case $nombre.value.trim().length <=3:
        $errorNombre.innerHTML = 'Ingrese un nombre con mas de 3 caracteres'
        $nombre.classList.add('is-invalid')
        validationsErrors= true
      break;
      case !regExAlpha.test($nombre.value):
        $errorNombre.innerHTML = "Debes ingresar un nombre válido"
        $nombre.classList.add('is-invalid')
         validationsErrors= true
        break;
      default:
        $errorNombre.innerHTML =""
          $nombre.classList.remove('is-invalid')
        $nombre.classList.add('is-valid')
         validationsErrors= false
        break;
    }
  })
    $apellido.addEventListener('change',function(){
    switch (true) {
      case $apellido.value.trim().length <=3:
        $errorApellido.innerHTML = 'Ingrese un apellido con mas de 3 caracteres'
        $apellido.classList.add('is-invalid')
         validationsErrors= true
      break;
      case !regExAlpha.test($apellido.value):
        $errorApellido.innerHTML = "Debes ingresar un apellido válido"
        $apellido.classList.add('is-invalid')
         validationsErrors= true
        break;
      default:
        $errorApellido.innerHTML =""
          $apellido.classList.remove('is-invalid')
        $apellido.classList.add('is-valid')
         validationsErrors= false
        break;
    }
  })
    $telefono.addEventListener('change',function(){
    switch (true) {
      case $telefono.value.trim().length <=9:
      $errorTelefono.innerHTML = 'Teléfono inválido'
      $telefono.classList.add('is-invalid')
      validationsErrors= true
      break;
      default:
      $errorTelefono.innerHTML =""
        $telefono.classList.remove('is-invalid')
        $telefono.classList.add('is-valid')
       validationsErrors= false
      break;
    }
  })
  $direccion.addEventListener('change',function(){
    switch (true) {
     case !regExAddress.test($direccion.value):
        $errorDireccion.innerHTML = "Debes ingresar una dirección válida"
        $direccion.classList.add('is-invalid')
        validationsErrors= true
        break;
      default:
        $errorDireccion.innerHTML =""
        $direccion.classList.remove('is-invalid')
        $direccion.classList.add('is-valid')
        validationsErrors= false
        break;
    }
  })
    $codigoPostal.addEventListener('change',function(){
    switch (true) {
     case !regExpCp.test($codigoPostal.value):
        $errorCp.innerHTML = "Código inválido"
        $codigoPostal.classList.add('is-invalid')
        validationsErrors= true
      break;
      default:
      $errorCp.innerHTML =""
        $telefono.classList.remove('is-invalid')
        $telefono.classList.add('is-valid')
       validationsErrors= false
      break;
    }
  })

    $ciudad.addEventListener('change',function(){
    switch (true) {
      case $ciudad.value.trim().length <=3:
        $errorCiudad.innerHTML = 'Ingrese una ciudad válida'
        $ciudad.classList.add('is-invalid')
         validationsErrors= true
      break;
      case !regExAlpha.test($ciudad.value):
        $errorCiudad.innerHTML = "Debes ingresar un ciudad válida"
        $ciudad.classList.add('is-invalid')
         validationsErrors= true
        break;
      default:
        $errorCiudad.innerHTML =""
          $ciudad.classList.remove('is-invalid')
        $ciudad.classList.add('is-valid')
         validationsErrors= false
        break;
    }
  })

    $provincia.addEventListener('change',function(){
    switch (true) {
      case $provincia.value.trim().length <=3:
        $errorProvincia.innerHTML = 'Ingrese una provincia válida'
        $provincia.classList.add('is-invalid')
         validationsErrors= true
      break;
      case !regExAlpha.test($provincia.value):
        $errorProvincia.innerHTML = "Ingrese una provincia válida"
        $provincia.classList.add('is-invalid')
         validationsErrors= true
        break;
      default:
        $errorProvincia.innerHTML =""
          $provincia.classList.remove('is-invalid')
        $provincia.classList.add('is-valid')
         validationsErrors= false
        break;
    }
  })
 /* $avatar.addEventListener('change', 
    function fileValidation(){
        let filePath = $avatar.value,
            allowefExtensions = /(.jpg|.jpeg|.png)$/i //Extensiones permitidas
        if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            $errorImagen.innerHTML = 'Imagen inválida';
            $avatar.value = '';
            validationsErrors = true;
            return false;
        }else{
            console.log($avatar.files);
            if($avatar.files && $avatar.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                    $imgPreview.innerHTML = '<img src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL($file.files[0]);
                $errorImagen.innerHTML = '';
                $avatar.classList.remove('is-invalid')
                validationsErrors = false;
            }
        }
    })*/
  
    $form.addEventListener('submit',function(event){
    let error = false;
    event.preventDefault()
    console.log($form.elements)
    let elementosForm = $form.elements
    

    for (let index = 0; index < elementosForm.length-1; index++) {
        console.log(elementosForm[index])
      if(elementosForm[index].value == "" && elementosForm[index].name !== "avatar" && elementosForm[index].name !== "address" && elementosForm[index].name !== "pCode" && elementosForm[index].name !== "city" && elementosForm[index].name !== "province" ){
          elementosForm[index].classList.add('is-invalid');
          
        error = true
      } 
  }

    if(error == false && !validationsErrors){
        console.log('Formulario Enviado');
        $form.submit()
    }

  })


  
})