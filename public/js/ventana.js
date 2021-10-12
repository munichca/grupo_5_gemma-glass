/* const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".mymodal.is-visible")) {
    document.querySelector(".mymodal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {

  if (e.key == "Escape" && document.querySelector(".mymodal.is-visible")) {
    document.querySelector(".mymodal.is-visible").classList.remove(isVisible);
  }
}); */

var body = document.getElementsByTagName("body")[0];
function btnModal(clicked_id){
    switch(clicked_id){
        case "btnModal1":
            var btn = document.getElementById("btnModal1");
            var modalWindow = document.getElementById("tvesModal");
            break;   
        case "btnModal2":
            var btn = document.getElementById("btnModal2");
            var modalWindow = document.getElementById("tvesModal2");
            break;   
        case "btnModal3":
            var btn = document.getElementById("btnModal3");
            var modalWindow = document.getElementById("tvesModal3");
            break;   
    }
        /* btn.onclick = function() { */
            /*  modalWindow.style.display = "block"; */
             modalWindow.style.opacity = "1";
             modalWindow.style.visibility = "visible";
             modalWindow.style.transform = "translateY(22%)";
             modalWindow.style.transitionDelay = "0.2s";
             modalWindow.style.transition = "all 0.5s cubic-bezier(0.51, 0.92, 0.24, 1.15)";
             
             body.style.position = "static";
             body.style.height = "100%";
             body.style.overflow = "hidden";
         /* } */
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
    }






