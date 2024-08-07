function calculateLove(){
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();
    if(name1 === '' || name2 === ''){
        alert('Entrer les noms.')
        result.innerHTML = ''
    }

    const loverPercentage = Math.floor(Math.random() * 101)
    
    const result = document.getElementById('resultat');
    result.innerHTML = `${name1} et ${name2} Votre Pourcentage d'amour est de ${loverPercentage}%`

    if(loverPercentage < 50){
        result.innerHTML += "<br> Ça ne vaut pas la peine de continuer, il faut chercher ailleurs!";
    }else if(loverPercentage >= 50 && loverPercentage < 71){
        result.innerHTML += "<br> Il y a du potentiel. Essaie!";
    }else{
        result.innerHTML += "<br> Super match ! L'amour est dans l'air!";
}
    document.getElementById('name1').value = '';
    document.getElementById('name2').value = '';
}