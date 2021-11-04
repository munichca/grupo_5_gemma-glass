function qs(element) {
  return document.querySelector(element)
}
let $form = qs('#form')
let $email= qs('#email-login')
let $errorEmail= qs('#errorEmail')
let $contraseña= qs('#contraseña-login')
let $errorContraseña= qs('#errorContraseña')
let $errorSubmit =qs ('#errorSubmit')

regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,

window.addEventListener('load', ()=>{
 $email.addEventListener('blur',function(){
    switch (true) {
      case !$email.value.trim():
        $errorEmail.innerHTML = "El email es obligatorio"
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
      default:
        $errorContraseña.innerHTML =""
        $contraseña.classList.remove('is-invalid')
        $contraseña.classList.add('is-valid')
         validationsErrors= false
        break;
    }
  })
  $form.addEventListener('submit',function(event){
    let error = false;
    event.preventDefault()
    console.log($form.elements)
    let elementosForm = $form.elements
    

    for (let index = 0; index < elementosForm.length-2; index++) {
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