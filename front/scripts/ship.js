
//Connection à l'API des teddies
onload = function(){
    fetch("http://localhost:3000/api/teddies")
        .then((response) =>  {return response.json() })
        .then((teddy) =>{
            displayShip(teddy);
        })
}