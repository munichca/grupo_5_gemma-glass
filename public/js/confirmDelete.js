
$mutton = document.querySelector(".masterButton");
let body = document.getElementsByTagName("body")[0];
let $btnDel = document.querySelector(".btnDel1");
window.addEventListener("load", function () {
    

    
$mutton.addEventListener("click", function(){
      
      let modalWindow = document.getElementById("tvesModalDel");
             modalWindow.style.opacity = "1";
             modalWindow.style.visibility = "visible";
             modalWindow.style.transform = "translateY(22%)";
             modalWindow.style.transitionDelay = "0.2s";
             modalWindow.style.transition = "all 0.5s cubic-bezier(0.51, 0.92, 0.24, 1.15)";
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
        }
    })
    let $btnEliminar = document.querySelector(".btnEliminar");
    

    $btnEliminar.addEventListener("click", function () {
        let inputChecked = document.querySelector('input[name="whi"]:checked');
        /* $form.setAttribute("action", `/apis/sdelete/"${inputChecked.value}"?_method=DELETE`); */
       // $form.setAttribute("action", `/admin/borrarProducto/"${inputChecked.value}"?_method=DELETE`);
       // $form.setAttribute("method", "POST");
        //$form.submit()
        alert("delete")
    
    

      })
    })