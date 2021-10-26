
   
let formColor = document.querySelector(".formColor")    
let submit = document.querySelector(".submit")    
/* let phanton = document.querySelector(".phanton") */
let escon =  document.querySelector(".escon")


function qs (element) {
    return document.querySelector(element)
}

let c1 = qs(".c1");
let c2 = qs(".c2");
let c3 = qs(".c3");
let c4 = qs(".c4");
let formOut = qs("formOut")
c1.ñstyle.border = "none"
c2.style.border = "none"    
c3.style.border = "none"    
c4.style.border = "none" 
/* ########################### */



/* ######################### */
function mostrar() {
    var x = document.getElementById("buscador");
    let lupa = document.getElementById("lupa");
    let search_2 = document.getElementById("search_2")
       if (x.style.display === "block") {
       x.style.display = "none";
       lupa.style.cursor = "pointer";
       lupa.style.pointerEvents = "initial"
       lupa.style.opacity = "1";
       
       
       } else {
              x.style.display = "block";
              lupa.style.opacity = "0";
              lupa.style.cursor = "not-allowed";
              lupa.style.pointerEvents = "none"
              search_2.focus();/* la funcion focus pone el cursor en el elemento al qyue se le aplica */
              
}
}
function color(clicked_id){
    switch(clicked_id){
        case "c1":
            c1.style.border = "1px solid white"
            c2.style.border = "none"
            c3.style.border = "none"
            c4.style.border = "none"
            escon.value = 1
            document.querySelector(".phanton").value = 1
            document.documentElement.style.setProperty("--tipos", "var(--tipos1)");
            document.documentElement.style.setProperty("--header", "var(--header1)");
            /* formOut.style.visibility = "visible" */
            submit.click();
            /* window.location.reload(true) */
            break;   
        case "c2":
            
            c1.style.border = "none"
            c2.style.border = "1px solid white"
            c3.style.border = "none"
            c4.style.border = "none"
            escon.value = 2
            
            document.documentElement.style.setProperty("--tipos", "var(--tipos2)");
            document.documentElement.style.setProperty("--header", "var(--header2)");
            /* formOut.style.visibility = "visible" */
            submit.click();
            break;   
        case "c3":
            c1.style.border = "none"
            c2.style.border = "none"
            c3.style.border = "1px solid white"
            c4.style.border = "none"
            escon.value = 3
            /* formOut.style.visibility = "visible" */
            document.documentElement.style.setProperty("--tipos", "var(--tipos3)");
            document.documentElement.style.setProperty("--header", "var(--header3)");
            submit.click();
            break;   
        case "c4":
            c1.style.border = "none"
            c2.style.border = "none"
            c3.style.border = "none"
            c4.style.border = "1px solid white"
            escon.value = 4
           /*  formOut.style.visibility = "visible" */
            document.documentElement.style.setProperty("--tipos", "var(--tipos4)");
            document.documentElement.style.setProperty("--header", "var(--header4)");
            /* document.querySelector(".submit").submit() */
            submit.click();
            break;   
      }
}
/* window.location.reload(true) */
function hacer_click(){
    
 }

       
           
           