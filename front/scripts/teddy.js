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

// affichage teddy spécifique page produit
function displayProducts(teddy){
    //récupération du container parent
    let container = document.getElementById("productContainer");

    let cartTeddies = JSON.parse(localStorage.getItem('cartTeddies'));

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

        if(cartTeddies.length == 0){
            cartTeddies.push(selectedTeddy);
            localStorage.setItem("cartTeddies", JSON.stringify(cartTeddies));
        }
        console.log(cartTeddies);
        //cartTeddies.push(selectedTeddy);

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

    // Validation du panier
    document.getElementById("validCommand").addEventListener("click", event =>{
      event.preventDefault();
      let lastName = document.getElementById("inputLastName");
      let firstName = document.getElementById("inputFirstName");
      let mail = document.getElementById("inputEmail");
      let phone = document.getElementById("inputPhone");
      let adrFact = document.getElementById("addrFact");
      let adrFactPostal = document.getElementById("codePostalFact");
      let adrFacVille = document.getElementById("villeFact");
      let adrLiv = document.getElementById("addrLiv");
      let adrLivPostal = document.getElementById("codePostalLiv");
      let adrLivVille = document.getElementById("villeLiv");

      // Vérification du champ vide
        if(lastName.value == ""){
            alert("Le champ Nom est vide");
            lastName.style.border = '2px solid red';
        }
        if(firstName.value == ""){
            alert("Le champ Prénom est vide");
            firstName.style.border = '2px solid red';
        }
        if(mail.value == ""){
            alert("Le champ mail est vide");
            mail.style.border = '2px solid red';
        }
        if(phone.value == ""){
            alert("Le champ Téléphone est vide");
            phone.style.border = '2px solid red';
        }
        if(adrFact.value== ""){
            alert("Le champ Adresse facturation est vide");
            adrFact.style.border = '2px solid red';
        }
        if(adrFactPostal.value == ""){
            alert("Le champ Code Postal Facturation est vide");
            adrFactPostal.style.border = '2px solid red';
        }
        if(adrFacVille.value == ""){
            alert("Le champ Vile Facturation est vide");
            adrFacVille.style.border = '2px solid red';
        }
        if(adrLiv.value == ""){
            alert("Le champ Adresse Livraison est vide");
            adrLiv.style.border = '2px solid red';
        }
        if(adrLivPostal.value == ""){
            alert("Le champ Code Postal Livraison est vide");
            adrLivPostal.style.border = '2px solid red';
        }
        if(adrLivVille.value == ""){
            alert("Le champ Ville Livraison est vide");
            adrLivVille.style.border = '2px solid red';
        }
        // récupération du formulaires
            //check champ téléphone contient que des num
            const phoneValue = document.getElementById("inputPhone").value;
            console.log(phoneValue);
            //localStorage.clear();
        //document.getElementById("validCommand").setAttribute("onclick","window.location.href='confirmation.html'")

    })
}
