onload = function(teddy){
    fetch("http://localhost:3000/api/teddies/order")
        .then((response) =>  {return response.json() })
        .then((teddy) =>{
            displayConfirmation(teddy)
        })

}
function displayConfirmation(teddy){
    let cartTeddies = JSON.parse(localStorage.getItem('cartTeddies'));

    // //Creation N° de commande
     document.getElementById("numcommand").textContent = JSON.parse(localStorage.orderId);

    //Recuperation de la somme du panier
    var totalPrice = [];

    for(let i = 0; i < cartTeddies.length; i++ ){
        var totalPriceTeddies = cartTeddies[i].teddyQte * cartTeddies[i].teddyPrice;
         totalPrice.push(totalPriceTeddies);
     }
     const reducer = (accumulator, currentValue) => accumulator + currentValue;

    //Creation des elements
    let container = document.getElementById("msgConfirmation-Body-Recap");
    let numberTed = document.createElement("p");
    let totalTed = document.createElement("p");

    // Declaration du contenu
    numberTed.textContent = "Vous avez commandez " + cartTeddies.length + "  produits";
    totalTed.textContent = "Votre commande est d'un montant de " + totalPrice.reduce(reducer) + " €";

    //Affichage des elements
    container.appendChild(numberTed);
    container.appendChild(totalTed);

    //Retour a la page d'acceuil & Suppr du localStorage
     document.getElementById("btnReturn").addEventListener("click", event =>{
         event.preventDefault();
         window.location.href = '../index.html';
         localStorage.clear();
    })
}