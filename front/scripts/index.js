//Déclaration des pages

main()

async function main () {
    const articles = await getArticle()
    for(article of articles){
        displayArticles(article)
    }
}

function getArticle() {
    return fetch ("http://localhost:3000/api/teddies")
        .then (function (httpdBodyResponse){
            return httpdBodyResponse.json()
        })
        .then(function (articles){
            return articles
        })
        .catch (function (error){
            alert(error)
        })
}
function displayArticles(teddySchema){
    document.getElementById("cardIndex-container").innerHTML +=
        '<div class="col-lg-4"> ' +
            '<div class="card"> ' +
                '<a href="OtherPages/product.html">' +
                    '<img src="../back/images/teddy_1.jpg" class="card-img-top" alt="Image">' +
                '</a> ' +
                '<div class="card-body"> ' +
                    '<h3 class="card-title">'+teddySchema.name+'</h3> ' +
                    '<p class="card-text">'+teddySchema.description+'</p> ' +
                    '<h4 class="card-text">'+teddySchema.price+'</h4>'+
                '</div> ' +
            '</div>' +
        '</div>'
}
