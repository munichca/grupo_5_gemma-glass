function qs(element) {
    return document.querySelector(element);
  }
function bn(element) {
    return document.getElementsByName(element);
  }
  window.addEventListener("load", function () {
    let $name = qs("#name"),
        $name1 = bn("name"),
        $price1 = bn("price"),
        $cleanText = qs(".cleanText"),
        regExAlphaNumeric = /^[A-Za-z\ñáéíóúü\0-9\s]{3,50}$/;
<<<<<<< HEAD
    let finded ="";
=======
    let found ="";
>>>>>>> bf341567eab4585d8723da96d1af8c579fd531af
    sessionStorage.setItem("name", "");
    $name.addEventListener("blur", function () {
        fetch("http://localhost:3005/apis/products/"+$name.value)
            .then(response => response.json())
            .then(nameFound => {
                found = nameFound;
                switch (true) {
                    case !$name1[0].value.trim() :
                        $name1[0].placeholder= "El campo nombre es obligatorio";
                        $name1[0].classList.add("is-invalid");
                        break;
                    case !regExAlphaNumeric.test($name1[0].value) :
                        $name1[0].value = "";
                        $name1[0].placeholder= "Este campo debe tener más de 3 caracteres";
                        $name1[0].classList.add("is-invalid");
                        break;
                    case found.data !== null:
                        if (found.data.name ===$name1[0].value){
                            sessionStorage.setItem("name", found.data.name);
                            $name1[0].value = "";
                            $name1[0].placeholder= "El nombre ya existe";
                            $name1[0].classList.add("is-invalid");
                            
                        }
                        break;
                    default :
                        $name1[0].classList.remove("is-invalid");
                        $name1[0].classList.add("is-valid");
                }
                }) ;
                
        
          
                
                /* if(nameFound.data.name === $name.value){ */
                /* if(nameFound.data.name === $name.value && nameFound.data !==null){
                    $name1[0].value = "";
                    $name1[0].placeholder= "El nombre existe, utilice otro";
                    $name1[0].classList.remove("is-valid");
                    $name1[0].classList.add("is-invalid")
                }else{
                    alert("mañana");
                    $name1[0].classList.remove("is-invalid");
                    $name1[0].classList.add("is-valid")
                } */
        
        
    });
        $cleanText.addEventListener("click", function(){
            for (let i = 0; i < elementosForm.length; i++) {
                elementosForm[i].classList.remove("is-invalid");
                elementosForm[i].classList.remove("is-valid");
                elementosForm[i].placeholder = "";
                $submitErrors.innerHTML = "";
            }
            elementosForm[0].focus();
        }); 
  $name.addEventListener("click", function(){
        $name1[0].placeholder= "";
        $name1[0].value= sessionStorage.getItem("name");
        $name1[0].classList.remove('is-invalid');
        $name1[0].classList.remove('is-valid');
  });
});