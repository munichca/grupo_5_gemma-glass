
let phanton = document.querySelector(".phanton") 
let caca2 = +phanton.value 
/* alert(caca2) */
if(caca2 != 0){
    formColor.style.visibility = "visible"
}


switch (caca2){
    case 1:
        c1.style.border = "1px solid white"
        document.documentElement.style.setProperty("--tipos", "var(--tipos1)");
        document.documentElement.style.setProperty("--header", "var(--header1)");
        
        break;   
    case 2:
        c2.style.border = "1px solid white"
        document.documentElement.style.setProperty("--tipos", "var(--tipos2)");
        document.documentElement.style.setProperty("--header", "var(--header2)");
        
        break;   
    case 3:
        c3.style.border = "1px solid white"
        document.documentElement.style.setProperty("--tipos", "var(--tipos3)");
        document.documentElement.style.setProperty("--header", "var(--header3)");
        
        break;   
    case 4:
        c4.style.border = "1px solid white"
        document.documentElement.style.setProperty("--tipos", "var(--tipos4)");
        document.documentElement.style.setProperty("--header", "var(--header4)");
        
        break; 
   }