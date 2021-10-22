

var body = document.getElementsByTagName("body")[0];
function btnModal(clicked_id){
    switch(clicked_id){
        case "btnModal1":
            var btnm = document.getElementById("btnModal1");
            var modalWindow = document.getElementById("tvesModal");
            break;   
        case "btnModal2":
            var btnm = document.getElementById("btnModal2");
            var modalWindow = document.getElementById("tvesModal2");
            break;   
        case "btnModal3":
            var btnm = document.getElementById("btnModal3");
            var modalWindow = document.getElementById("tvesModal3");
            break;   
      }
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
    }






