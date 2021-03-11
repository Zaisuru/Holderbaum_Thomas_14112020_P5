/*Script ajout liste déroulante pour sélection de la qte*/

let selectQte = document.getElementById('selectQte');

for (i = 0; i <= 5; i++) {
    let createOption = document.createElement('option');
    createOption.value = i;
    createOption.innerHTML = i;
    selectQte.appendChild(createOption);
}