// Récupération de l'id de la page
let params = new URL(document.location).searchParams;
let idProduit = params.get('id');

//let adr =http://localhost:3000/api/teddies/
    //https://ab-p5-api.herokuapp.com/api/teddies

//Connection à l'API des teddies
onload = function(){
    fetch("http://localhost:3000/api/teddies/" + idProduit)
        .then((response) =>  {return response.json() })
        .then((teddy) =>{
                displayProducts(teddy);
        })
}
// Récupération du submit



