function bn(element) {
    return document.getElementsByName(element);
  }
function qs(element) {
    return document.querySelector(element);
  }
  alert("$img0.value");
  let $img0 = qs("#image0"),
  $img1 = qs("#image1"),
  $archivos1 = bn('archivos');
  let 
  window.addEventListener("load", function () {
    alert("$img0.value");
    $archivos1[0].value  =$img0.src; 
    $archivos1[1].value = $img1.src;

    
  })    