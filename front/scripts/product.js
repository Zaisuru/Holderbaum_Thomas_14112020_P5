// Récupération de l'id de la page
let params = new URL(document.location).searchParams;
let idProduit = params.get('id');

//Connection à l'API des teddies
onload = function(){
    fetch("http://localhost:3000/api/teddies/" + idProduit)
        .then((response) =>  {return response.json() })
        .then((teddy) =>{
                displayProducts(teddy);
        })
        .catch(error => alert('Une erreur est survenue, réessayer plus tard'))
}

// affichage teddy spécifique page produit
function displayProducts(teddy){
    //récupération du container parent
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
    btnAddShip.setAttribute("onclick","window.location.href='ship.html'");

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

        let selectedTeddy = {
            teddyName : teddy.name,
            teddyPrice : teddy.price,
            teddyColors : document.getElementById("teddiesColors").value,
            teddyQte : parseInt(quantity),
        }

        let cartTeddies = JSON.parse(localStorage.getItem('cartTeddies')) || [];

        const findIndexTed = cartTeddies.findIndex((element => element.teddyName === selectedTeddy.teddyName) && (element => element.teddyColors === selectedTeddy.teddyColors));
        if (findIndexTed == -1) {
            cartTeddies.push(selectedTeddy);
        }else{
            cartTeddies[findIndexTed].teddyQte += selectedTeddy.teddyQte;
        }
        localStorage.setItem("cartTeddies", JSON.stringify(cartTeddies));

    })
}



