function qs(element) {
  return document.querySelector(element)
}

let $form = qs ('#form')
let $nombre = qs('#name')
let $errorNombre = qs('#errorNombre')
let $apellido= qs('#lastName')
let $errorApellido= qs('#errorApellido')
let $telefono= qs('#phone')
let $errorTelefono= qs('#errorTelefono')
let $email= qs('#email')
let $errorEmail= qs('#errorEmail')
let $contraseña= qs('#myInput1')
let $errorContraseña= qs('#errorContraseña')
let $contraseña2= qs('#myInput2')
let $errorContraseña2= qs('#errorContraseña2')
let $terminos= qs('#check')
let $errorTerminos= qs('#errorTerminos')
let $avatar = qs('#examinar')
let $errorImagen = qs('#errorImagen')

let $error= qs('#errorSumbit')
regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
regExPass = /^(?=.\d)(?=.[a-z]).{6,12}$/;
let validationsErrors = false

window.addEventListener('load', ()=>{
  $nombre.addEventListener('blur',function(){
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
    $apellido.addEventListener('blur',function(){
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
    $telefono.addEventListener('blur',function(){
    switch (true) {
      case $telefono.value.trim().length <=10:
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
    $email.addEventListener('blur',function(){
    switch (true) {
      case !$email.value.trim():
        $errorEmail.innerHTML = "El email es obligatorio"
        $email.classList.add('is-invalid')
         validationsErrors= true
      break;
      case !regExEmail.test($email.value):
        $errorEmail.innerHTML = "Debes ingresar un email válido"
        $email.classList.add('is-invalid')
         validationsErrors= true
        break;
      default:
        $errorEmail.innerHTML =""
        $email.classList.remove('is-invalid')
        $email.classList.add('is-valid')
         validationsErrors= false
        break;
    }
  })
    $contraseña.addEventListener('blur',function(){
    switch (true) {
      case !$contraseña.value.trim():
        $errorContraseña.innerHTML = "La contraseña es obligatoria"
        $contraseña.classList.add('is-invalid')
         validationsErrors= true
        break;
         case $contraseña.value.trim().length <=5:
        $errorContraseña.innerHTML = "La contraseña debe contener al menos 6 caracteres"
        $contraseña.classList.add('is-invalid')
         validationsErrors= true
        break;
      default:
        $errorContraseña.innerHTML =""
        $contraseña.classList.remove('is-invalid')
        $contraseña.classList.add('is-valid')
         validationsErrors= false
        break;
    }
  })
    $contraseña2.addEventListener('blur',function(){
    switch (true) {
      case !$contraseña2.value.trim():
        $errorContraseña2.innerHTML = "Debe repetir su contraseña"
        $contraseña2.classList.add('is-invalid')
         validationsErrors= true
      break;
      case $contraseña2.value !== $contraseña.value:
        $errorContraseña2.innerHTML = "Las contraseñas no coinciden"
        $contraseña2.classList.add('is-invalid')
        validationsErrors= true
        break;
         case $contraseña.value.trim().length <=5:
        $errorContraseña.innerHTML = "La contraseña debe contener al menos 6 caracteres"
        $contraseña.classList.add('is-invalid')
         validationsErrors= true
        break;
      default:
        $errorContraseña2.innerHTML =""
        $contraseña2.classList.remove('is-invalid')
        $contraseña2.classList.add('is-valid')
         validationsErrors= false
        break;
    }
  })
  /*$avatar.addEventListener('change', 
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
      if(elementosForm[index].value == "" && elementosForm[index].name !== "avatar" ){
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