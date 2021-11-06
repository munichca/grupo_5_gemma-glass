function qs(element) {
  return document.querySelector(element)
}
let $form = qs('#form')
let $avatar= qs('#examinar')
let $errorAvatar= qs('#errorAvatar')
let $nombre= qs('#nombre')
let $errorNombre= qs('#errorNombre')
let $apellido= qs('#apellido')
let $errorApellido= qs('#errorApellido')
let $email = qs('#emailEdit')
let $errorEmail= qs('#errorEmail')
let $telefono= qs('#telefonoEdit')
let $errorTelefono= qs('#errorTelefono')
let $direccion= qs('#direccionEdit')
let $errorDireccion= qs('#errorDireccion')
let $codigoPostal= qs('#codigoPostal')
let $errorCp= qs('#errorCp')
let $ciudad= qs('#ciudadEdit')
let $errorCiudad= qs('#errorCiudad')
let $provincia= qs('#provinciaEdit')
let $errorProvincia= qs('#errorProvincia')

let $error= qs('#errorSubmit')

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


  })