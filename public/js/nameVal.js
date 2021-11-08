let $name = document.querySelector("#name");
let $name1 = document.getElementsByName("name");

$name.addEventListener("blur", function(){
    
    fetch("http://localhost:3005/apis/products/"+$name.value)
    .then(response => response.json())
    .then(nameFinded => {
        if(nameFinded.data.name === $name.value){
            $name1[0].value = "";
            $name1[0].placeholder= "El nombre existe, utilice otro";
            $name1[0].classList.add("is-invalid")
        }else{
            alert(response.name+" mañana")
            $name1[0].classList.remove("is-invalid");
            $name1[0].classList.add("is-valid")
        }
    })
})



