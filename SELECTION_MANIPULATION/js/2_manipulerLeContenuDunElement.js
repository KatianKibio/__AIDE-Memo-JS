// INNER HTML
//La propriété innerHTML représente le contenu HTML d'un élément
//En lecture sa valeur contient des balise html
//En modification, son contenu est interprété par le navigateur
var article = document.querySelectorAll('.article')[0]
console.log(article)
console.log("- - - le innerHTML - ↓ -");
console.log(article.innerHTML)//affichage du html

// TEXT CONTENT
//La propriété textContent représente le contenu textuel d'un élément
//En lecture sa valeur ne contient pas les balise html
//En modification, son contenu n'est pas interprété par le navigateur
console.log("- - - le textContent - ↓ -");
console.log(article.textContent);//affiche les contenu textuel sans les balises

// // SI JE VEUX MODIFIER LA VALEUR QUI EST D'UNE BALISE (ou dans une balise) // //
// l'idéal c'est le innerHTML
article.innerHTML = "<h3>VOICI MON NOUVEAU TITRE H3</h3>"
// LE BLOC DIV ARTICLE DEVIENT UN H3
// ESSAYER AVEC LES CODE EN COMMENTAIRE
    //article.innerHTML = "<ul><li>transformation</li> <li>en un paragraphe</li></ul>"
    //article.innerHTML = "<p>transformation en un paragraphe</p>"

// !!!!!!!!!!!!!!!! A SAVOIR !!!!!!!!!!!!!!!! //
// les changements sont faites sur une copie de notre document et non sur notre documenet source lui-même

//SI JE JEUX METTRE DU CONTENU TEXTUEL SIMPLEMENT
article.textContent = "<h3> VOICI MON NOUVEAU TITRE MON AMI</h3>"// Ne pas mettre les balises
// j'ai fais exprès // il interpretera les balises comme du
// C'est bien pour montrer aux utilisateur le code