
     function qs (element) {
        return document.querySelector(element)
    }
    
    let $preview = qs("#img-preview");
    let $archivos = qs("#archivos") 

    $archivos.addEventListener("change", function(){
        if (this.files) {[].forEach.call(this.files, readAndPreview);}
    function readAndPreview(file) {
      if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
        return alert(file.name + " is not an image");// cambiar
      } 
      var reader = new FileReader();
      reader.addEventListener("load", function() {
        var image = new Image();
        image.height = 100;
        image.title  = file.name;
        image.src    = this.result;
        $preview.appendChild(image);
      });
      reader.readAsDataURL(file);
    }
    });

  let archivos = document.getElementsByName('archivos');
  let cleanImages = document.querySelector(".cleanImages")
  let imgPreview = document.querySelector("#img-preview")
  cleanImages.onclick = () =>{
    imgPreview.innerHTML = "";
    archivos[0].value = "";
  }
  
