function addition(a, b) {
    console.log('je fais une addition de '+a+' et de ' + b);
    return a + b;
}

// 1. Modifier le texte du titre h1 avec "Le meilleur burger"
var allH1s = document.getElementsByTagName('h1');
var h1 = allH1s[0];
h1.innerHTML = "Le meilleur burger";

// également en une seule ligne, avec un autre getter d'éléments
document.querySelector('h1').innerHTML = "Le meilleur burger";

// 2. Modifier le HTML du deuxième h2, pour mettre "Il est <strong>délicieux</strong>, essayez-le!"
var h2 = document.getElementsByTagName('h2')[1];
h2.innerHTML = "Il est <strong>délicieux</strong>, essayez-le!";

// 3. Récupérer l'objet "Pain du haut", et modifier sa largeur (en %)
// sol 1
document.getElementById('top').style.width = "40%";

// sol2
//document.getElementById('top').setAttribute('style', 'width: 40%;');

// 4. Récupérer la deuxième boulette, et lui rajouter la classe css "pickle"
var meatball = document.getElementsByClassName('meatball')[1];
// sol 1
meatball.classList.add('pickle');

// sol 2
// meatball.className += " pickle";

// sol 3
// var cla = meatball.getAttribute('class');
// meatball.setAttribute('class', cla + ' pickle');

// 5. Récupérer la troisième boulette et augmenter sa largeur à 90px
document.getElementsByClassName('meatball')[2].style.width = '90px';

// 6. Récupérer la tomate, et modifier sa couleur de fond en orange
var f = document.querySelector('.burger div.tomato');
f.style.backgroundColor = "orange";


// 7. Pour chaque tranche de fromage, augmenter l'arrondi de la bordure
var cheeses = document.getElementsByClassName('cheese');    
for(var i = 0; i < cheeses.length; i++) {
    cheeses[i].style.borderRadius = '20px';
}


// var i = 0;
// while(i < cheeses.length) {
//     cheeses[i].style.borderRadius = '20px';
//     i++;
// }

// 8. Rajouter une nouvelle tranche de fromage entre les deux steaks
var cheese = document.querySelector('.cheese');

// Manière 1 : le clone
var newCheese = cheese.cloneNode(true);
// Manière 2 : la construction à la main
// var newCheese = document.createElement('div');
// newCheese.classList.add('cheese');

// var modifiedStyle = cheeses[0].getAttribute('style');
// newCheese.setAttribute('style', modifiedStyle);

// Manière 1 d'ajout de la balise dans la page
var secondPatty = document.querySelectorAll('.patty')[1];
secondPatty.before(newCheese);
// OU
var burger = document.querySelector('.burger');
burger.insertBefore(newCheese, secondPatty);

// Manière 2 d'ajout de la balise dans la page
var firstPatty = document.querySelectorAll('.patty')[0];
firstPatty.after(newCheese);

// Manière 3 d'ajout de la balise dans la page
firstPatty.insertAdjacentHTML('afterend', '<div class="cheese">');

// 9. Rajouter un attribut id ayant pour valeur 'bottom' au pain du bas
document.querySelector('.bun-bottom').setAttribute('id', 'bottom');
document.querySelector('.bun-bottom').id = 'bottom';

// 10. Prendre le lien 'documentation officielle' et:
    // faire en sorte qu'il s'ouvre dans un nouvel onglet
    // modifier l'adresse du lien pour mettre https://www.google.fr
var a = document.querySelector('a');
a.href = 'https://www.google.fr';
a.setAttribute('target', '_blank');

// 11. DUPLIQUER l'assiette avec une fonction faite pour ça, et mettre la nouvelle assiette tout en bas (en dessous de la 1ere)
var plate = burger.children[burger.children.length - 1];
var newPlate = plate.cloneNode(true);
document.querySelector('.burger').appendChild(newPlate);