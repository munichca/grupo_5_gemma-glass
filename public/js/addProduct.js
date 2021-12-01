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
    let finded ="";
    sessionStorage.setItem("name", "");
    $name.addEventListener("blur", function () {
        fetch("http://localhost:3005/apis/products/"+$name.value)
            .then(response => response.json())
            .then(nameFinded => {
                finded = nameFinded;
                switch (true) {
                    case !$name1[0].value.trim() :
                        $name1[0].placeholder= "El campo nombre es obligatorio front";
                        $name1[0].classList.add("is-invalid");
                        break;
                    case !regExAlphaNumeric.test($name1[0].value) :
                        $name1[0].value = "";
                        $name1[0].placeholder= "Deben ser tres o más caracteres front";
                        $name1[0].classList.add("is-invalid");
                        break;
                    case finded.data !== null:
                        if (finded.data.name ===$name1[0].value){
                            sessionStorage.setItem("name", finded.data.name);
                            $name1[0].value = "";
                            $name1[0].placeholder= "El nombre ya existe front";
                            $name1[0].classList.add("is-invalid");
                            
                        }
                        break;
                    default :
                        $name1[0].classList.remove("is-invalid");
                        $name1[0].classList.add("is-valid");
                }
                }) ;
                
        
          
                
                /* if(nameFinded.data.name === $name.value){ */
                /* if(nameFinded.data.name === $name.value && nameFinded.data !==null){
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