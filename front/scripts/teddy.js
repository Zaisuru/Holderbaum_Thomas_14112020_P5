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
    let bodyPrice = document.createElement("h3");
    let containerColors = document.createElement("div");
    let colorsTitle = document.createElement("h4");
    let colorsSelect = document.createElement("select");
    let containerQte = document.createElement("div");
    let qteTitle = document.createElement("h4");
    let qteSelect = document.createElement("select");
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
    qteSelect.setAttribute("class","selectQte");
    btnAddShip.setAttribute("class","btn btn-command");
    btnAddShip.setAttribute("id","addShip");
    btnAddShip.setAttribute("type","submit");
    btnAddShip.setAttribute("href","ship.html");

    //récupération éléments API
    bodyTitle.textContent = teddy.name;
    bodyDescription.textContent = teddy.description;
    bodyPrice.textContent = teddy.price + " €";

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
    containerQte.appendChild(qteSelect);
    cardBody.appendChild(btnAddShip);

    //ajout des colors
    for(let i = 0 ; i < teddy.colors.length; i++){
        let colorsSelectOption = document.createElement("option");
        colorsSelectOption.textContent = teddy.colors[i];
        colorsSelect.appendChild(colorsSelectOption);
    }
    // Ajout des qte
    let qteMax = 10
    for(let i = 1; i < qteMax; i++){
        let qteSelectOption = document.createElement("option");
        qteSelectOption.textContent = i;
        qteSelect.appendChild(qteSelectOption);
    }

    // Récupération élément dans le local storage
    document.getElementById("addShip").addEventListener("click", event => {
        console.log("Hello toi");
        localStorage.setItem('name', teddy.name);
        localStorage.setItem('price', teddy.price);
        localStorage.setItem('colors', teddy.colors);
        // localStorage.setItem('quantity', qteSelectOption);
        console.log(localStorage.getItem('name'));
    })
}

//affichage du panier
function displayShip(){
    //Récupération du container parent
    let container = document.getElementById("containerShip");

    // récupération du localStorage
    let teddyStorage = localStorage.getItem('name');
    let priceStorage = localStorage.getItem('price');

    // déclaration du bouton
    let btnOrder = document.createElement("button");

    //déclaration du formulaire
    let containerColForm = document.createElement("div");
    let cardContainer = document.createElement("div");
    let cardTitle = document.createElement("div");
    let titleForm = document.createElement("h2");
    let cardBody = document.createElement("div");
    let bodyForm = document.createElement("form");

    let formRowName = document.createElement("div");
    let rowGroup = document.createElement("div");
    let labelFirstName = document.createElement("label");
    let inputFirstName = document.createElement("input");
    let labelLastName = document.createElement("label");
    let inputLastName = document.createElement("input");

    let formRowEmail = document.createElement("div");
    let rowGroupEmail = document.createElement("div");
    let labelEmail = document.createElement("label");
    let inputEmail = document.createElement("input");

    let formRowAdr = document.createElement("div");
    let rowGroupAdr = document.createElement("div");
    let labelAddressFact = document.createElement("label");
    let inputAddressFact = document.createElement("input");
    let labelAddressLiv = document.createElement("label");
    let inputAddressLiv = document.createElement("input");


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
    let tbodyTR = document.createElement("tr");


    // récupération du localStorage


    // Création des class css
        //déclaration du formulaire
    containerColForm.setAttribute("class", "col-lg-6");
    cardContainer.setAttribute("class", "card");
    cardTitle.setAttribute("class","card-title");
    cardBody.setAttribute("class","card-body");
    bodyForm.setAttribute("class","form");
    formRowName.setAttribute("class","form-row");
    rowGroup.setAttribute("class","form-group col-md-6");

    labelFirstName.setAttribute("for", "inputForm");
    labelFirstName.setAttribute("value","Votre nom");
    inputFirstName.setAttribute("type", "text");
    inputFirstName.setAttribute("class","inputForm");

    labelLastName.setAttribute("for", "inputForm");
    labelLastName.setAttribute("value","Votre nom");
    inputLastName.setAttribute("type", "text");
    inputLastName.setAttribute("class","inputForm");


    formRowEmail.setAttribute("class","form-row");
    rowGroupEmail.setAttribute("class","form-group col-md-6");
    labelEmail.setAttribute("for", "inputForm");
    labelEmail.setAttribute("value","Votre nom");
    inputEmail.setAttribute("type", "text");
    inputEmail.setAttribute("class","inputForm");


    formRowAdr.setAttribute("class","form-row");
    rowGroupAdr.setAttribute("class","form-group col-md-6");

    labelAddressFact.setAttribute("for", "inputForm");
    labelAddressFact.setAttribute("value","Votre nom");
    inputAddressFact.setAttribute("type", "text");
    inputAddressFact.setAttribute("class","inputForm");

    labelAddressLiv.setAttribute("for", "inputForm");
    labelAddressLiv.setAttribute("value","Votre nom");
    inputAddressLiv.setAttribute("type", "text");
    inputAddressLiv.setAttribute("class","inputForm");


//déclaration du panier
    containerColShip.setAttribute("class", "col-lg-6");
    cardContainerShip.setAttribute("class", "card");
    cardTitleShip.setAttribute("class","card-title");
    cardBodyShip.setAttribute("class","card-body");
    bodyTable.setAttribute("class","table table-striped");
    tableThead.setAttribute("class","thead-dark");


    //Déclaration du contenu
        //contenu du formulaire
    labelFirstName.textContent = 'Nom';
    labelLastName.textContent = "Prénom";

    labelEmail.textContent = "Email";

    labelAddressFact.textContent = "Adresse de facturation";
    labelAddressLiv.textContent = "Adresse de livraison";

        // contenu du panier
    titleShip.textContent = 'Votre panier';

    //Affichage des éléments
        //affichage du formulaire
    container.appendChild(containerColForm);
    containerColForm.appendChild(cardContainer);
    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardBody);
    cardBody.appendChild(bodyForm);

    bodyForm.appendChild(formRowName);
    formRowName.appendChild(rowGroup);
    rowGroup.appendChild(labelFirstName);
    rowGroup.appendChild(inputFirstName);
    formRowName.appendChild(rowGroup);
    rowGroup.appendChild(labelLastName);
    rowGroup.appendChild(inputLastName);

    bodyForm.appendChild(formRowEmail);
    formRowEmail.appendChild(rowGroupEmail);
    rowGroupEmail.appendChild(labelEmail);
    rowGroupEmail.appendChild(inputEmail);

    bodyForm.appendChild(formRowAdr);
    formRowAdr.appendChild(rowGroupAdr);
    rowGroupAdr.appendChild(labelAddressFact);
    rowGroupAdr.appendChild(inputAddressFact);

    rowGroupAdr.appendChild(labelAddressLiv);
    rowGroupAdr.appendChild(inputAddressLiv);

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