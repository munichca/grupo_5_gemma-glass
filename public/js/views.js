window.addEventListener("load", function() {
    if (document.querySelector("#externalContainer")) {
        let $externalContainer = document.querySelector("#externalContainer");
        $externalContainer.addEventListener("click", function(e) {
            let $troley = document.getElementsByName("troley");
            let troleyResult = [].slice.call($troley);
            let flag = 0;
            for (i = 0; i <= troleyResult.length; i++) {
                if (troleyResult[i] === e.target) {
                    fetch(`http://localhost:3005/apis/products/search/${troleyResult[i].id}`)
                        .then((response) => response.json())
                        .then((product) => {
                            let resultado = JSON.parse(localStorage.getItem("troleyProd")) || [];
                            for (let i = -1; i < resultado.length + 1; i++) {
                                switch (i) {
                                    case -1:
                                        if (resultado.length === 0) {
                                            resultado.push(product.data)
                                            break;
                                        }
                                    case 0:
                                        if (resultado.length === 1) {
                                            const element = resultado[i];
                                            console.log(element);
                                            break
                                        }
                                    default:
                                        for (let u = 0; u < resultado.length; u++) {
                                            const element = resultado[u];
                                            if (element.id === product.data.id) {
                                                console.log("el archivo existe")
                                                flag = 0;
                                                break;
                                            } else {
                                                flag = 1;
                                            }
                                        }
                                }
                            }
                            if (flag === 1) {
                                resultado.push(product.data)
                            }
                            console.log(resultado.length)
                            localStorage.setItem("troleyProd", JSON.stringify(resultado));
                        })
                }
            }
        })
    }
})