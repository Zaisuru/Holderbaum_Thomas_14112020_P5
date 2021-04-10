//function pour affichage des teddy dans le main
function displayTeddies(teddy){
    // récupération du container parent
    let container = document.getElementById("cardIndex-container");

    //déclaration du nombre dans le panier
    let cartTeddies = JSON.parse(localStorage.getItem('cartTeddies'));
    if(cartTeddies != null){
       document.getElementById("nbArtShip").textContent = cartTeddies.length;
    }

    // création des éléments
    let containerCol = document.createElement("div");
    let containerCard = document.createElement("div");
    let cardA=document.createElement("a");
    let cardImg=document.createElement("img");
    let btnTed = document.createElement("button");
    let containerBody=document.createElement("div");
    let containerTitle=document.createElement("div");
    let bodyTitle=document.createElement("h3");
    let bodyPrice=document.createElement("h4");

    // Ajout des classes css
    containerCol.setAttribute("class", "col-lg-4");
    containerCard.setAttribute("class", "card");
    cardA.setAttribute("href","../front/OtherPages/product.html?id="+ teddy._id);
    cardImg.setAttribute("src",teddy.imageUrl);
    cardImg.setAttribute("alt","Image ourson en peluche fait main");
    cardImg.setAttribute("class", "indexImg");
    btnTed.setAttribute("class", "btn btnImg");
    containerBody.setAttribute("class", "card-body");
    containerTitle.setAttribute("class", "card-body-title");

    //Ajout des éléments provenant de l'API
    bodyTitle.textContent = teddy.name;
    bodyPrice.textContent=teddy.price +' €';

    //Ajout des autres élèments
    btnTed.textContent="En savoir plus"

    //Affichage des éléments
    container.appendChild(containerCol);
    containerCol.appendChild(containerCard);
    containerCard.appendChild(cardImg);
    containerCol.appendChild(containerBody);
    containerBody.appendChild(containerTitle);
    containerTitle.appendChild(bodyTitle);
    containerTitle.appendChild(bodyPrice);
    containerBody.appendChild(cardA);
    cardA.appendChild(btnTed);
}
