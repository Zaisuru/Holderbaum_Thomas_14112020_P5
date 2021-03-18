// Récupération de l'id de la page
let params = new URL(document.location).searchParams;
let idProduit = params.get('id');

//Connection à l'API des teddies
onload = function(){
    fetch("http://localhost:3000/api/teddies/" + idProduit)
        .then((response) =>  {return response.json() })
        .then((teddy) =>{
                displayProducts(teddy);
        })
}

// localStorage

// Récupération du submit
let addShipProduct = document.getElementById("addShip");

console.log(addShipProduct);

addShipProduct.addEventListener("click",event =>{
    console.log("Hello toi");
});




