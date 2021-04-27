
//Connection à l'API des teddies
onload = function(){
    fetch("http://localhost:3000/api/teddies")
        .then((response) =>  {return response.json() })
        .then((teddy) =>{
            displayShip(teddy);
        })
}

//affichage du panier
function displayShip(){
    //Récupération du container parent
    let container = document.getElementById("tableBody");

    // récupération du localStorage
    let cartTeddies = JSON.parse(localStorage.getItem('cartTeddies'));

//déclaration du panier
    // contenu du panier
    if (cartTeddies != null){
        for (let i = 0; i < cartTeddies.length; i++){
            let bodyTable = document.createElement("tr");
            let nameLine = document.createElement("td");
            let colorsLine = document.createElement("td");
            let priceLine = document.createElement("td");
            let quantityLine = document.createElement("td");
            let totalLine = document.createElement("td");
            var totalShip = cartTeddies[i].teddyQte * cartTeddies[i].teddyPrice;

            nameLine.textContent=cartTeddies[i].teddyName;
            colorsLine.textContent=cartTeddies[i].teddyColors;
            priceLine.textContent=cartTeddies[i].teddyPrice;
            quantityLine.textContent=cartTeddies[i].teddyQte;
            totalLine.textContent= totalShip;

            container.appendChild(bodyTable);
            bodyTable.appendChild(nameLine);
            bodyTable.appendChild(colorsLine);
            bodyTable.appendChild(priceLine);
            bodyTable.appendChild(quantityLine);
            bodyTable.appendChild(totalLine);

        }
    }
    //Somme du panier
    var totalPrice = [];

    for(let i = 0; i < cartTeddies.length; i++ ){
        var totalPriceTeddies = cartTeddies[i].teddyQte * cartTeddies[i].teddyPrice;
        totalPrice.push(totalPriceTeddies);
    }

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    document.getElementById("sumShip").textContent=totalPrice.reduce(reducer);

}
function addProductApi(){
    let cartTeddies = JSON.parse(localStorage.getItem('cartTeddies'));

    let products = [];

    let contact = {
        firstName : document.getElementById("inputFirstName").value,
        lastName : document.getElementById("inputLastName").value,
        address:document.getElementById("addrFact").value,
        city :document.getElementById("villeFact").value,
        email :document.getElementById("inputEmail").value
    }

    cartTeddies.forEach(element => {
        products.push(element.teddyId)
    })
}
// Validation du panier
function validForm(){
    event.preventDefault();
    addProductApi();
}