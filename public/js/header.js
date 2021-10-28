
function qs (element) {
    return document.querySelector(element)
}

let c1 = qs(".c1");
let c2 = qs(".c2");
let c3 = qs(".c3");
let c4 = qs(".c4");
/* c1.style.border = "none"
c2.style.border = "none"    
c3.style.border = "none"    
c4.style.border = "none"  */
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
            document.documentElement.style.setProperty("--tipos", "var(--tipos1)");
            document.documentElement.style.setProperty("--header", "var(--header1)");
            break;   
        case "c2":
            c1.style.border = "none"
            c2.style.border = "1px solid white"
            c3.style.border = "none"
            c4.style.border = "none"
            document.documentElement.style.setProperty("--tipos", "var(--tipos2)");
            document.documentElement.style.setProperty("--header", "var(--header2)");
            break;   
        case "c3":
            c1.style.border = "none"
            c2.style.border = "none"
            c3.style.border = "1px solid white"
            c4.style.border = "none"
            document.documentElement.style.setProperty("--tipos", "var(--tipos3)");
            document.documentElement.style.setProperty("--header", "var(--header3)");
            break;   
        case "c4":
            c1.style.border = "none"
            c2.style.border = "none"
            c3.style.border = "none"
            c4.style.border = "1px solid white"
            document.documentElement.style.setProperty("--tipos", "var(--tipos4)");
            document.documentElement.style.setProperty("--header", "var(--header4)");
            break;   
      }
      let mId = (clicked_id);
      document.cookie = "pepe="+ mId + ";" + "max-age= 3000 ; path=/";
    }
let decodedCookie = decodeURIComponent(document.cookie);
let caca2 = decodedCookie.split(';');
let micookie = caca2[0];
var igual = micookie.indexOf("=");
var valor = micookie.substring(igual+1);

    (function (){
        c1.style.border = "none"
c2.style.border = "none"    
c3.style.border = "none"    
c4.style.border = "none"
        switch (valor){
            case "c1":
                c1.style.border = "1px solid white"
                document.documentElement.style.setProperty("--tipos", "var(--tipos1)");
                document.documentElement.style.setProperty("--header", "var(--header1)");
                break;   
            case "c2":
                c2.style.border = "1px solid white"
                document.documentElement.style.setProperty("--tipos", "var(--tipos2)");
                document.documentElement.style.setProperty("--header", "var(--header2)");
                break;   
            case "c3":
                c3.style.border = "1px solid white"
                document.documentElement.style.setProperty("--tipos", "var(--tipos3)");
                document.documentElement.style.setProperty("--header", "var(--header3)");
                break;   
            case "c4":
                c4.style.border = "1px solid white"
                document.documentElement.style.setProperty("--tipos", "var(--tipos4)");
                document.documentElement.style.setProperty("--header", "var(--header4)");
                break; 

                
        }      
    })()    
      