// Récupération de l'id de la page
let params = new URL(document.location).searchParams;
let idProduit = params.get('id');

console.log(idProduit);

//Connection à l'API des teddies
onload = function(){
    fetch("http://localhost:3000/api/teddies/" + idProduit)
        .then((response) =>  {return response.json() })
        .then((teddy) =>{
                displayProducts(teddy);
        })
}



