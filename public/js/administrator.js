function qs(element) {
    return document.querySelector(element);
}
window.addEventListener("load", function() {
    let $sbmSection = qs(".sbmSection"),
        $shape = qs("#shapes1"),
        $brand = qs(".brand1"),
        $material = qs(".material1"),
        $navUsers = qs("#navUsers1"),
        $checkUser = qs(".checkUser"),
        $contSubCat = qs(".contSubCat"),
        $mutton = qs(".masterButton"),
        $subCatLabel = qs(".subCatLabel"),
        $titleChoose = qs(".titleChoose"),
        $btnAdd = qs(".btnAdd1"),
        $btnEdit = qs(".btnEdit1"),
        $btnDel = qs(".btnDel1"),
        $subCatEntry = qs(".subCatEntry"),
        $subCatSection2 = qs(".subCatSection2"),
        $btnEliminar = qs(".btnEliminar"),
        $subCatSection = qs(".subCatSection"),
        $subCatInput = qs(".subCatInput"),
        $titleModal = qs(".titleModal"),
        $rojo = qs(".rojo"),
        $closeX = qs(".closeX");
    let body = document.getElementsByTagName("body")[0];
    let modalWindow = document.getElementById("tvesModalDel");
    regExAlphaNumeric = /^[A-Za-z\ñáéíóúü\0-9\s]{3,254}$/;
    if ($subCatInput) {
        $subCatInput.value = "";
    }
    $mutton.innerHTML = "Aceptar";
    $mutton.style.pointerEvents = "none";
    $shape.style.pointerEvents = "inherit";
    $brand.style.pointerEvents = "inherit";
    $material.style.pointerEvents = "inherit";
    $material.style.fontWeight = "unset";
    $subCatLabel.innerHTML = "";
    $titleChoose.innerHTML = "Seleccione una sub-categoria";
    fillFields("shape");
    $subCatInput.addEventListener("change", function() {
        $rojo.innerHTML = "";
    });
    $btnAdd.addEventListener("click", function() {
        if (document.querySelector('input[name="whi"]:checked')) {
            document.querySelector('input[name="whi"]:checked').checked = false;
        } else {
            document.querySelector('input[name="whi"]').checked = false;
        }
        if ($shape.style.fontWeight === "850") {
            $titleChoose.innerHTML = "Agregue la nueva Forma";
        }
        if ($brand.style.fontWeight === "850") {
            $titleChoose.innerHTML = "Agregue la nueva Marca";
        }
        if ($material.style.fontWeight === "850") {
            $titleChoose.innerHTML = "Agregue el nuevo Material";
        }
        $subCatEntry.style.display = "flex";
        $mutton.innerHTML = "Agregar";
        $mutton.style.pointerEvents = "inherit";
        $btnAdd.style.pointerEvents = "none";
        $btnAdd.style.opacity = "0.7";
        $btnEdit.style.pointerEvents = "inherit";
        $btnEdit.style.opacity = "1";
        $btnDel.style.pointerEvents = "inherit";
        $btnDel.style.opacity = "1";
        $subCatLabel.textContent = "Ingrese el nombre de la nueva Forma";
        $subCatSection2.style.pointerEvents = "inherit";
        $subCatSection2.style.opacity = "1";
        $subCatInput.value = "";
        $subCatInput.focus();
        hiding();
    });
    $btnEdit.addEventListener("click", function() {
        document.querySelector('input[name="whi"]').checked = true;
        if ($shape.style.fontWeight === "850") {
            $titleChoose.innerHTML = "Seleccione la Forma a Editar";
        }
        if ($brand.style.fontWeight === "850") {
            $titleChoose.innerHTML = "Seleccione la Marca a Editar";
        }
        if ($material.style.fontWeight === "850") {
            $titleChoose.innerHTML = "Seleccione el Material a Editar";
        }
        $subCatInput.value = "";
        $subCatEntry.style.display = "flex";
        $mutton.innerHTML = "Editar";
        $btnAdd.style.pointerEvents = "inherit";
        $btnAdd.style.opacity = "1";
        $btnEdit.style.pointerEvents = "none";
        $btnEdit.style.opacity = "0.7";
        $btnDel.style.pointerEvents = "inherit";
        $btnDel.style.opacity = "1";
        $mutton.style.pointerEvents = "inherit";
        $subCatSection2.style.pointerEvents = "inherit";
        $subCatSection2.style.opacity = "1";
        showing();
    });
    $btnDel.addEventListener("click", function() {
        document.querySelector('input[name="whi"]').checked = true;
        if ($shape.style.fontWeight === "850") {
            $titleChoose.innerHTML = "Seleccione la Forma a Eliminar";
        }
        if ($brand.style.fontWeight === "850") {
            $titleChoose.innerHTML = "Seleccione la Marca a Eliminar";
        }
        if ($material.style.fontWeight === "850") {
            $titleChoose.innerHTML = "Seleccione el Material a Eliminar";
        }
        $subCatInput.value = "";
        $subCatEntry.style.display = "none";
        $mutton.innerHTML = "Eliminar";
        $mutton.style.pointerEvents = "inherit";
        $btnAdd.style.pointerEvents = "inherit";
        $btnAdd.style.opacity = "1";
        $btnEdit.style.pointerEvents = "inherit";
        $btnEdit.style.opacity = "1";
        $btnDel.style.pointerEvents = "none";
        $btnDel.style.opacity = "0.7";
        $subCatSection2.style.pointerEvents = "inherit";
        $subCatSection2.style.opacity = "1";
        showing();
    });
    $shape.addEventListener("click", function() {
        $subCatSection2.style.pointerEvents = "none";
        $subCatSection2.style.opacity = "0.7";
        $shape.style.fontWeight = "850";
        $shape.style.pointerEvents = "none";
        $brand.style.fontWeight = "unset";
        $material.style.fontWeight = "unset";
        $brand.style.pointerEvents = "inherit";
        $material.style.pointerEvents = "inherit";
        $material.style.fontWeight = "unset";
        $subCatLabel.innerHTML = "Ingrese el nombre de la nueva Forma";
        $titleChoose.innerHTML = "Seleccione la accion a ejecutar con la Forma";
        $mutton.style.pointerEvents = "none";
        fillFields("shape");
        showingBtn();
    });
    $brand.addEventListener("click", function() {
        $shape.style.fontWeight = "unset";
        $brand.style.fontWeight = "850";
        $material.style.fontWeight = "unset";
        $shape.style.pointerEvents = "inherit";
        $brand.style.pointerEvents = "none";
        $material.style.pointerEvents = "inherit";
        $subCatLabel.innerHTML = "Ingrese el nombre de la nueva Marca";
        $titleChoose.innerHTML = "Seleccione la accion a ejecutar con la Marca";
        $mutton.style.pointerEvents = "none";
        fillFields("brand");
        showingBtn();
    });
    $material.addEventListener("click", function() {
        $shape.style.fontWeight = "unset";
        $brand.style.fontWeight = "unset";
        $material.style.fontWeight = "850";
        $shape.style.pointerEvents = "inherit";
        $brand.style.pointerEvents = "inherit";
        $material.style.pointerEvents = "none";
        $subCatLabel.innerHTML = "Ingrese el nombre del nuevo Material";
        $titleChoose.innerHTML = "Seleccione la accion a ejecutar con el Material";
        $mutton.style.pointerEvents = "none";
        fillFields("material");
        showingBtn();
    });

    function fillFields(subCat) {
        $contSubCat.innerHTML = "";
        fetch(`http://localhost:3005/apis/${subCat}`)
            .then((response) => response.json())
            .then((data) => {
                for (let i = 0; i < data.data.length; i++) {
                    $contSubCat.innerHTML += `<div class="contSubC" id="contSubC${data.data[i].id}"></div>`;
                    let div = document.querySelector(`#contSubC${data.data[i].id}`);
                    div.innerHTML += `<label class="textSubC" for="">${data.data[i].name}</label>`;
                    div.innerHTML += `<input type="radio" class="whint" name="whi" value="${data.data[i].id}" for="">`;
                }
            });
        $subCatInput.value = "";
        $subCatInput.focus();
    }
    /*  $navUsers.addEventListener("click", function () {
         fetch("http://localhost:3005/apis/sU/"+ +$checkUser.value)
           .then((response) => response.json())
           .then((caca) => {
             alert("no es super caca");
             if (caca.data.name!=="") {
               alert(caca.data.name);
             } else {
               alert("no es super user");
             }
           });
       }); */

    $mutton.addEventListener("click", function(e) {
        switch ("850") {
            case $shape.style.fontWeight:
                shearchName("shape", "sedit", $subCatInput.value);
                break;
            case $brand.style.fontWeight:
                shearchName("brand", "bedit", $subCatInput.value);
                break;
            case $material.style.fontWeight:
                shearchName("material", "medit", $subCatInput.value);
                break;
            default:
        }
        if ($btnDel.style.pointerEvents === "none") {
            modalWindow.style.opacity = "1";
            modalWindow.style.visibility = "visible";
            modalWindow.style.transform = "translateY(18%)";
            modalWindow.style.transitionDelay = "0.2s";
            modalWindow.style.transition =
                "all 0.5s cubic-bezier(0.51, 0.92, 0.24, 1.15)";
            body.style.position = "static";
            body.style.height = "100%";
            body.style.overflow = "hidden";
            window.onclick = function(event) {
                if (event.target == modalWindow) {
                    modalWindow.style.opacity = "";
                    modalWindow.style.visibility = "hidden";
                    modalWindow.style.transform = "translateY(0)";
                    body.style.position = "inherit";
                    body.style.height = "auto";
                    body.style.overflow = "visible";
                }
            };
            let myArray = arrayObject();
            myArray[0].map(function(current, index) {
                if (current.checked == true) {
                    $titleModal.innerHTML = `¿ Está seguro de querer eliminar ${myArray[1][index].textContent} ?`;
                }
            });
        }
    });
    $closeX.addEventListener("click", function() {
        modalWindow.style.opacity = "";
        modalWindow.style.visibility = "hidden";
        modalWindow.style.transform = "translateY(0)";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    });

    function shearchName(subCat, eSubCat, name) {
        let inputChecked = document.querySelector('input[name="whi"]:checked');
        //console.log(inputChecked.value)
        fetch(`http://localhost:3005/apis/${subCat}/${name}`)
            .then((response) => response.json())
            .then((subCatFinded) => {
                switch (true) {
                    case !$subCatInput.value.trim():
                        $rojo.innerHTML = "El campo no puede estar vacio front";
                        if ($btnAdd.style.pointerEvents === "none") {
                            $subCatInput.focus();
                        }
                        break;
                    case !regExAlphaNumeric.test($subCatInput.value):
                        $rojo.innerHTML =
                            "El campo debe tener al menos tres caracteres front";
                        if ($btnAdd.style.pointerEvents === "none") {
                            $subCatInput.focus();
                        }
                        break;
                    case subCatFinded.data !== null:
                        if (subCatFinded.data.name === $subCatInput.value) {
                            if ($btnAdd.style.pointerEvents === "none") {
                                $rojo.innerHTML = "El nombre ya existe front";
                                $subCatInput.focus();
                                break;
                            } else {
                                $subCatInput.focus();
                            }
                        }
                        break;
                    default:
                        switch ("none") {
                            case $btnAdd.style.pointerEvents:
                                fetch("http://localhost:3005/apis/" + subCat, {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                            name: name,
                                        }),
                                    })
                                    .then((response) => response.json())
                                    .then((result) => {
                                        if (result.status != 1) {
                                            alert("El recurso NO se creó");
                                        }
                                    });
                                fillFields(subCat);
                                break;
                            case $btnEdit.style.pointerEvents:
                                fetch(
                                        `http://localhost:3005/apis/${eSubCat}/${inputChecked.value}`, {
                                            method: "PUT",
                                            headers: {
                                                "Content-Type": "application/json",
                                            },
                                            body: JSON.stringify({
                                                name: name,
                                            }),

                                        }
                                    )
                                    .then((response) => response.json())
                                    .then((result) => {
                                        if (result.status != 1) {
                                            alert("El recurso NO se creó");
                                        }
                                    });
                                fillFields(subCat);
                                break;
                        }
                }
            });
    }

    function deleteSubCat(eSubCat, id) {
        fetch(`http://localhost:3005/apis/${eSubCat}/${id}`, {
                method: "DELETE",
            })
            .then((response) => response.json())
            .then((result) => {
                let body = document.getElementsByTagName("body")[0];
                let modalWindow = document.getElementById("tvesModalDel");
                modalWindow.style.opacity = "";
                modalWindow.style.visibility = "hidden";
                modalWindow.style.transform = "translateY(0)";
                body.style.position = "inherit";
                body.style.height = "auto";
                body.style.overflow = "visible";
            });
    }

    $subCatInput.addEventListener("focus", function() {
        if ($rojo.textContent.trim() && $btnEdit.style.pointerEvents == "none") {
            $rojo.innerHTML = "";
        }
    });
    $btnEliminar.addEventListener("click", function() {
        let inputChecked = document.querySelector('input[name="whi"]:checked');

        switch ("850") {
            case $shape.style.fontWeight:
                deleteSubCat("sdelete", inputChecked.value);
                fillFields("shape");
                break;
            case $brand.style.fontWeight:
                deleteSubCat("bdelete", inputChecked.value);
                fillFields("brand");
                break;
            case $material.style.fontWeight:
                deleteSubCat("mdelete", inputChecked.value);
                fillFields("material");
                break;
        }
    });

    function arrayObject() {
        let whisResult = Array.from(document.getElementsByName("whi"));
        let labelResult = Array.from(document.querySelectorAll(".textSubC"));
        return [whisResult, labelResult];
    }

    $contSubCat.addEventListener("click", function() {
        let myArray = arrayObject();
        myArray[0].map(function(current, index) {
            if (current.checked == true) {
                $subCatInput.value = myArray[1][index].textContent;
            }
        });
    });

    function showing() {
        if ($rojo.textContent.trim()) {
            $rojo.innerHTML = "";
        }
        let myArray = arrayObject();
        myArray[0].map(function(current, index) {
            current.style.pointerEvents = "inherit";
            current.style.checked = false;
            myArray[1][index].style.opacity = "1";
        });
        return;
    }

    function showingBtn() {
        if ($rojo.textContent.trim()) {
            $rojo.innerHTML = "";
        }
        $mutton.innerHTML = "Aceptar";
        $subCatInput.value = "";
        $subCatEntry.style.display = "flex";
        $sbmSection.style.display = "flex";
        $contSubCat.innerHTML = "";
        $btnAdd.style.pointerEvents = "inherit";
        $btnAdd.style.opacity = "1";
        $btnEdit.style.pointerEvents = "inherit";
        $btnEdit.style.opacity = "1";
        $btnDel.style.pointerEvents = "inherit";
        $btnDel.style.opacity = "1";
    }

    /* function hiding() {
          let myArray = arrayObject()
          myArray[0].map(function(current, index) {
              current.style.pointerEvents = "none";
              myArray[1][index].style.opacity = "0.7";
              return
          })
      } */

    function hiding() {
        let whis = document.getElementsByName("whi");
        let labelText = document.querySelectorAll(".textSubC");
        whis.forEach(function(current, index) {
            current.style.pointerEvents = "none";
            labelText[index].style.opacity = "0.7";
            return;
        });

        return;
    }
});