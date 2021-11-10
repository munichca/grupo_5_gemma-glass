function qs(element) {
    return document.querySelector(element);
  }
function bn(element) {
    return document.getElementsByName(element);
  }
  window.addEventListener("load", function () {
    let $products = qs("#products"),
        $categories = qs("#categories"),
        $category = qs(".categories"),
        $shapes = qs("#shapes"),
        $mainList = qs(".mainList")


$products.addEventListener("click", function(){
$mainList.style.display="flex";

$category.style.display= "none";

})
$categories.addEventListener("click", function(){
$mainList.style.display="none";
$category.style.display="flex";
})

  })