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
    bodyPrice.textContent=teddy.price +' €';

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
    let bodyPrice = document.createElement("h3");
    let containerColors = document.createElement("div");
    let colorsTitle = document.createElement("h4");
    let colorsSelect = document.createElement("select");
    let containerQte = document.createElement("div");
    let qteTitle = document.createElement("h4");
    let qteSelectAdd = document.createElement("button");
    let qteSelectQte = document.createElement("input");
    let qteSelectDel = document.createElement("button");
    let btnAddShip = document.createElement("button");

    // Ajout des class css
    containerCol.setAttribute("class","col-12");
    containerCard.setAttribute("class","card");
    cardHorizontal.setAttribute("class","card-horizontal");
    containerImg.setAttribute("class","img-square-wrapper");
    imgTeddy.setAttribute("class","card-img-top");
    imgTeddy.setAttribute("src",teddy.imageUrl);
    imgTeddy.setAttribute("alt","Image ourson en peluche fait main");
    cardBody.setAttribute("class","card-body card-body-product");
    bodyTitle.setAttribute("class","body-title");
    bodyDescription.setAttribute("class","body-text");
    containerColors.setAttribute("class","card-select");
    containerQte.setAttribute("class","card-select");
    qteSelectAdd.setAttribute("id","selectQteAdd");
    qteSelectAdd.setAttribute("class","btn btn-primary");
    qteSelectQte.setAttribute("id","qteSelectQte");
    qteSelectQte.setAttribute("type","text");
    qteSelectQte.setAttribute("placeholder","1");
    qteSelectDel.setAttribute("id", "selectQteDel");
    qteSelectDel.setAttribute("class", "btn btn-danger");
    btnAddShip.setAttribute("class","btn btn-command");
    btnAddShip.setAttribute("id","addShip");
    btnAddShip.setAttribute("type","submit");
    btnAddShip.setAttribute("onclick","window.location.href='ship.html'");

    //récupération éléments API
    bodyTitle.textContent = teddy.name;
    bodyDescription.textContent = teddy.description;
    bodyPrice.textContent = teddy.price + " €";
    qteSelectAdd.textContent= "+";
    qteSelectDel.textContent="-";

    //définition des autres champs
    colorsTitle.textContent = "Choisir votre couleur";
    qteTitle.textContent = "Quantité";
    btnAddShip.textContent = "Ajouter votre sélection";

    // Ajout des éléments depuis dans le html
    container.appendChild(containerCol);
    containerCol.appendChild(containerCard);
    containerCard.appendChild(cardHorizontal);
    cardHorizontal.appendChild(containerImg);
    containerImg.appendChild(imgTeddy);
    cardHorizontal.appendChild(cardBody);
    cardBody.appendChild(bodyTitle);
    cardBody.appendChild(bodyDescription);
    cardBody.appendChild(bodyPrice);
    cardBody.appendChild(containerColors);
    containerColors.appendChild(colorsTitle);
    containerColors.appendChild(colorsSelect);
    cardBody.appendChild(qteTitle);
    cardBody.appendChild(containerQte);
    containerQte.appendChild(qteTitle);
    containerQte.appendChild(qteSelectAdd);
    containerQte.appendChild(qteSelectQte);
    containerQte.appendChild(qteSelectDel);
    cardBody.appendChild(btnAddShip);

    //ajout des colors
    for(let i = 0 ; i < teddy.colors.length; i++){
        let colorsSelectOption = document.createElement("option");
        colorsSelectOption.textContent = teddy.colors[i];
        colorsSelect.appendChild(colorsSelectOption);
    }
    // Ajout des qte

    // Récupération élément dans le local storage
    document.getElementById("addShip").addEventListener("click", event => {
        localStorage.setItem('name', teddy.name);
        localStorage.setItem('price', teddy.price);
        localStorage.setItem('colors', 'blue');
        localStorage.setItem('quantity', document.getElementById("qteSelectQte").value);
        event.preventDefault();
    })
}

//affichage du panier
function displayShip(){
    //Récupération du container parent
    let container = document.getElementById("containerShip");

    // récupération du localStorage
    let teddyStorage = localStorage.getItem('name');
    let priceStorage = localStorage.getItem('price');

    //déclaration du panier
    let containerColShip = document.createElement("div");
    let cardContainerShip = document.createElement("div");
    let cardTitleShip = document.createElement("div");
    let titleShip = document.createElement("h2");
    let cardBodyShip = document.createElement("div");
    let bodyTable = document.createElement("table");
    let tableThead = document.createElement("thead");
    let theadTR = document.createElement("tr");
    let tableTbody = document.createElement("tbody");
    let btnCommand = document.createElement("button");


//déclaration du panier
    containerColShip.setAttribute("class", "col-lg-6");
    cardContainerShip.setAttribute("class", "card");
    cardTitleShip.setAttribute("class","card-title");
    cardBodyShip.setAttribute("class","card-body");
    bodyTable.setAttribute("class","table table-striped");
    tableThead.setAttribute("class","thead-dark");
    btnCommand.setAttribute("class", "btn btn-command");


    //Déclaration du contenu

        // contenu du panier
    titleShip.textContent = 'Votre panier';
    btnCommand.textContent = "Commander ! "

    //Affichage des éléments
        //affichage du panier
    container.appendChild(containerColShip);
    containerColShip.appendChild(cardContainerShip);
    cardContainerShip.appendChild(cardTitleShip);
    cardContainerShip.appendChild(cardBodyShip);
    cardBodyShip.appendChild(bodyTable);
    bodyTable.appendChild(tableThead);
    tableThead.appendChild(theadTR);
    for (let i = 0; i < 4; i++){
        let theadTH = document.createElement("th");
        theadTH.textContent = "text";
        theadTR.appendChild(theadTH);
    }
    bodyTable.appendChild(tableTbody);
    for ( let i=0; i < 5;i++){
        let tbodyTR = document.createElement("tr");
        let tbodyTD = document.createElement("td");
        tbodyTD.textContent=localStorage.getItem('name');
        tableTbody.appendChild(tbodyTR);
        tbodyTR.appendChild(tbodyTD);

    }
    cardBodyShip.appendChild(btnCommand);

                // for(let i = 0; i < 4; i++){
                //     let bodyTableColumn = document.createElement("td");
                //     bodyTableColumn.textContent = 'Test';
                //     bodyTable.appendChild(bodyTableColumn);
                // }
    // Validation du panier
        // Création n° de fact
        // sup du localStorage
        // alert de lconfirmation
}