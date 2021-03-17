//function pour affichage des teddy dans le main

function displayTeddies(teddy){
    // récupération du container parent
    let container = document.getElementById("cardIndex-container");
    // création des éléments
    let containerCol = document.createElement("div");
    let containerCard = document.createElement("div");
    let cardA=document.createElement("a");
    let cardImg=document.createElement("img");
    let containerBody=document.createElement("div");
    let bodyTitle=document.createElement("h3");
    let bodyDescription=document.createElement("p");
    let bodyPrice=document.createElement("h4");

    // Ajout des classes css
    containerCol.setAttribute("class", "col-lg-4");
    containerCard.setAttribute("class", "card");
    cardA.setAttribute("href","/OpenP5_BS/front/OtherPages/product.html?id="+ teddy._id);
    cardImg.setAttribute("src",teddy.imageUrl);
    cardImg.setAttribute("alt","Image ourson en peluche fait main");
    cardImg.setAttribute("class", "indexImg");
    containerBody.setAttribute("class", "card-body");

    //Ajout des éléments provenant de l'API
    bodyTitle.textContent = teddy.name;
    bodyDescription.textContent=teddy.description;
    bodyPrice.textContent=teddy.price;

    //Affichage des éléments
    container.appendChild(containerCol);
    containerCol.appendChild(containerCard);
    containerCard.appendChild(cardA);
    cardA.appendChild(cardImg);
    containerCol.appendChild(containerBody);
    containerBody.appendChild(bodyTitle);
    containerBody.appendChild(bodyDescription);
    containerBody.appendChild(bodyPrice);
}

// affichage teddy spécifique page produit
function displayProducts(teddy){
    //récupération du container parent
    let container = document.getElementById("productContainer");

    //création des éléments
    let containerCol = document.createElement("div");
    let containerCard = document.createElement("div");
    let cardHorizontal = document.createElement("div");
    let containerImg = document.createElement("div");
    let imgTeddy = document.createElement("img");
    let cardBody = document.createElement("div");
    let bodyTitle = document.createElement("h2");
    let bodyDescription = document.createElement("p");
    let bodyPrice = document.createElement("p");
    let containerColors = document.createElement("div");
    let colorsTitle = document.createElement("h3");
    let colorsSelect = document.createElement("select");
    let colorsSelectOption = document.createElement("option");
    let containerQte = document.createElement("div");
    let qteSelect = document.createElement("select");
    let qteSelectOption = document.createElement("option");
    let btnAddShip = document.createElement("btn");

    // Ajout des class css
    containerCol.setAttribute("class","col-12");
    containerCard.setAttribute("class","card");
    cardHorizontal.setAttribute("class","card-horizontal");
    containerImg.setAttribute("class","img-square-wrapper");
    imgTeddy.setAttribute("class","card-img-top card-product");
    imgTeddy.setAttribute("src",teddy.imageUrl);
    imgTeddy.setAttribute("alt","Image ourson en peluche fait main");
    cardBody.setAttribute("class","card-body");
    bodyTitle.setAttribute("class","body-title");
    bodyDescription.setAttribute("class","body-text");
    containerColors.setAttribute("class","card-select");
    //X.setAttribute("class","");
    qteSelect.setAttribute("class","selectQte");
    btnAddShip.setAttribute("class","btn btn-command");
    btnAddShip.setAttribute("value","Ajouter votre sélection");

    //récupération éléments API
    bodyTitle.textContent = teddy.name;
    bodyDescription.textContent = teddy.description;
    bodyPrice.textContent = teddy.price;
    for(let i=0; i < teddy.colors.length; i++){
        colorsSelectOption.textContent = teddy.colors[0];
    }

    //définition des autres champs
    let qteMax = 10 
    for(let i = 1; i < qteMax; i++){
        qteSelectOption.textContent = i ;
    }
    btnAddShip.textContent = "Ajouter votre sélection"


    // Ajout des éléments depuis dans le html
    container.appendChild(containerCol);
    containerCol.appendChild(containerCard);
    containerCard.appendChild(cardHorizontal);
    cardHorizontal.appendChild(containerImg);
    containerImg.appendChild(imgTeddy);
    containerImg.appendChild(cardBody);
    cardBody.appendChild(bodyTitle);
    cardBody.appendChild(bodyDescription);
    cardBody.appendChild(bodyPrice);
    cardBody.appendChild(containerColors);
    containerColors.appendChild(colorsSelect);
    colorsSelect.appendChild(colorsSelectOption);
    cardBody.appendChild(containerQte);
    containerQte.appendChild(qteSelect);
    qteSelect.appendChild(qteSelectOption);
    cardBody.appendChild(btnAddShip);

}