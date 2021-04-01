//function pour affichage des teddy dans le main
function displayTeddies(teddy){
    // récupération du container parent
    let container = document.getElementById("cardIndex-container");

    //déclaration du nombre dans le panier
    let cartTeddies = JSON.parse(localStorage.getItem('cartTeddies'))
    if(cartTeddies != null){
       document.getElementById("nbArtShip").textContent = cartTeddies.length;
    }

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
    cardA.setAttribute("href","../front/OtherPages/product.html?id="+ teddy._id);
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

    let cartTeddies = JSON.parse(localStorage.getItem('cartTeddies'))
    if(cartTeddies != null){
        document.getElementById("nbArtShip").textContent = cartTeddies.length;
    }
    // Déclaration des éléments
    let imgTeddy = document.getElementById("imgTeddies");
    let tedName = document.getElementById("teddiesName");
    let tedDesc = document.getElementById("teddiesDesc");
    let tedPrice = document.getElementById("teddiesPrice");
    let tedColors = document.getElementById("teddiesColors");
    let btnAddShip = document.getElementById("addShip");

    // Ajout des class css
    imgTeddy.setAttribute("class","card-img-top");
    imgTeddy.setAttribute("src",teddy.imageUrl);
    //btnAddShip.setAttribute("onclick","window.location.href='ship.html'");

    //récupération éléments API
    tedName.textContent = teddy.name;
    tedDesc.textContent = teddy.description;
    tedPrice.textContent = teddy.price + " €";
    //Récupération des autres éléments
    let quantity = document.getElementById('qteSelectQte').textContent;

    // Ajout des éléments depuis dans le html
    //ajout des colors
    for(let i = 0 ; i < teddy.colors.length; i++){
        let colorsSelectOption = document.createElement("option");
        colorsSelectOption.textContent = teddy.colors[i];
        tedColors.appendChild(colorsSelectOption);
    }

    // Ajout d'une qte
    document.getElementById("selectQteAdd").addEventListener("click", event =>{
        quantity ++ ;
        document.getElementById("qteSelectQte").textContent= quantity;
    })

    // Suppression d'une qte
    document.getElementById("selectQteDel").addEventListener("click", event =>{
        if(quantity >= 1){
            quantity --;
            document.getElementById("qteSelectQte").textContent= quantity;
        }
    })

    // Récupération élément dans le local storage
    document.getElementById("addShip").addEventListener("click", event => {
        event.preventDefault();
        let selectedTeddy = {
            teddyName : teddy.name,
            teddyPrice : teddy.price,
            teddyColors : document.getElementById("teddiesColors").value,
            teddyQte : quantity,
        }
        let cartTeddies = JSON.parse(localStorage.getItem('cartTeddies')) || [];

        console.log(cartTeddies);

        cartTeddies.push(selectedTeddy);

        localStorage.setItem("cartTeddies", JSON.stringify(cartTeddies));
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
            let totalShip = cartTeddies[i].teddyQte * cartTeddies[i].teddyPrice;

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

    // Validation du panier
    document.getElementById("validCommand").addEventListener("click", event =>{
        event.preventDefault();
        // récupération du formulaireS

        alert("salut");

    })
}