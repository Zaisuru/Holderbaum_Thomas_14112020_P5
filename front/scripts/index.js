//import

//Connection à l'API des teddies
onload = function(){
    fetch("http://localhost:3000/api/teddies")
        .then((response) =>  {return response.json() })
        .then((teddies) =>{
            for (const teddy of teddies){
                displayTeddies(teddy);
            }
        })
        .catch(error => alert('Connexion impossible, réessayer plus tard'))
}

