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
        validationsErrors= true
      break;
      case !regExAlpha.test($nombre.value):
        $errorNombre.innerHTML = "Debes ingresar un nombre válido"
         validationsErrors= true
        break;
      default:
        $errorNombre.innerHTML =""
         validationsErrors= false
        break;
    }
  })
    $apellido.addEventListener('blur',function(){
    switch (true) {
      case $apellido.value.trim().length <=3:
        $errorApellido.innerHTML = 'Ingrese un apellido con mas de 3 caracteres'
         validationsErrors= true
      break;
      case !regExAlpha.test($apellido.value):
        $errorApellido.innerHTML = "Debes ingresar un apellido válido"
         validationsErrors= true
        break;
      default:
        $errorApellido.innerHTML =""
         validationsErrors= false
        break;
    }
  })
    $telefono.addEventListener('blur',function(){
    switch (true) {
      case $telefono.value.trim().length <=10:
        $errorTelefono.innerHTML = 'Teléfono inválido'
         validationsErrors= true
      break;
      default:
      $errorTelefono.innerHTML =""
       validationsErrors= false
      break;
    }
  })
    $email.addEventListener('blur',function(){
    switch (true) {
      case !$email.value.trim():
        $errorEmail.innerHTML = "El email es obligatorio"
         validationsErrors= true
      break;
      case !regExEmail.test($email.value):
        $errorEmail.innerHTML = "Debes ingresar un email válido"
         validationsErrors= true
        break;
      default:
        $errorEmail.innerHTML =""
         validationsErrors= false
        break;
    }
  })
    $contraseña.addEventListener('blur',function(){
    switch (true) {
      case !$contraseña.value.trim():
        $errorContraseña.innerHTML = "La contraseña es obligatoria"
         validationsErrors= true
        break;
      default:
        $errorContraseña.innerHTML =""
         validationsErrors= false
        break;
    }
  })
    $contraseña2.addEventListener('blur',function(){
    switch (true) {
      case !$contraseña2.value.trim():
        $errorContraseña2.innerHTML = "Debe repetir su contraseña"
         validationsErrors= true
      break;
      case $contraseña2.value !== $contraseña.value:
        $errorContraseña2.innerHTML = "Las contraseñas no coinciden"
        validationsErrors= true
        break;
      default:
        $errorContraseña2.innerHTML =""
         validationsErrors= false
        break;
    }
  })
  
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
        //$form.submit()
    }

  })


  
})