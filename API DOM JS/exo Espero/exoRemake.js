
var elementNode = (name) => {
  if (name && typeof (name) === "string") {
    return document.createElement(name)
  }
  return null
}

var textNode = (name) => {
  if (name && typeof (name) === "string") {
    return document.createTextNode(name)
  }
  return null
}

//::::::::::::::::::::::::::::::::::::::::::::::::::


var ul = elementNode('ul')

for (let index = 1; index < 9; index++) {
  let li = elementNode("li")
  li.style.color = "yellow"
  let content = textNode("Element Javascript N°" + index)
  li.appendChild(content)
  ul.appendChild(li)
}

//::::::::::::::::
//JE M'EXERCE
console.log(ul);
document.getElementById('app').appendChild(ul)

var hisTag = (name) => {
  if (name && typeof (name) === "string") {
    return document.createElement(name)
  }
  return null
}

var hisText = (name) => {
  if (name && typeof (name) === "string") {
    return document.createTextNode(name)
  }
  return null
}

// creation de la balise nav
var tagNav = hisTag('nav')

// formation des balises javasscript
for (let index = 1; index < 5; index++) {
  // creation des balises et du contenu
  let tagLi = hisTag("li")
  let tagA = hisTag('a')
  let content_hisText = hisText('Lien page '+index)
  // stylisation des textes
  tagLi.style.fontSize = "0.9rem"
  // formation de la balise li dans Nav
  tagNav.appendChild(tagLi)

  // formation de la balise a dans li et du texte dans a
  for (let index = 1; index < 2; index++) {
    tagA.appendChild(content_hisText)
    tagLi.appendChild(tagA)
    tagA.href = "https://getbootstrap.com/"
    tagA.title = "voici un lien";
  }
}

// affichage du groupe de balises creer
console.info(tagNav);
document.querySelector("header").appendChild(tagNav)
