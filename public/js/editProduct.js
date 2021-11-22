function bn(element) {
    return document.getElementsByName(element);
  }
function qs(element) {
    return document.querySelector(element);
  }
  
window.addEventListener("load", function () {
    let $name1 = bn("name"),
    $cancel = qs(".cancel"),
    regExAlphaNumeric = /^[A-Za-z\ñáéíóúü\0-9\s]{3,10}$/;
$cancel.addEventListener("click", function(){
    $cancel.href="/administrator";
  })
$name1[0].addEventListener("blur", function () {
    switch (true) {
        case !$name1[0].value.trim() :
            $name1[0].placeholder= "El campo nombre es caca obligatorio";
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
})
$name1[0].addEventListener("change", function(){
    if ($name1[0].value !== nameOld){
    fetch("http://localhost:3005/apis/products/"+$name1[0].value)
            .then(response => response.json())
            .then(nameFinded => {
                if(nameFinded.data.name === $name1[0].value){
                    $name1[0].value = "";
                    $name1[0].placeholder= "El nombre existe, utilice otro";
                    $name1[0].classList.remove("is-valid");
                    $name1[0].classList.add("is-invalid")
                }else{
                    alert(response.name+" mañana")
                    $name1[0].classList.remove("is-invalid");
                    $name1[0].classList.add("is-valid")
                }
        })
    }
})
$name1[0].addEventListener("click", function(){
    $name1[0].placeholder= "";
    $name1[0].classList.remove('is-invalid');
    $name1[0].classList.remove('is-valid');
});
})
