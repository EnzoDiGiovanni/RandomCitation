const newQuoteBtn = document.querySelector("#new-quote-btn");
const quote = document.querySelector("#quote");
const quoteContainer = document.querySelector(".quote-container");

function getRandomIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

let images = [
  "img/img1.avif",
  "img/img2.avif",
  "img/img3.avif",
  "img/img4.avif",
  "img/img5.avif",
  "img/img6.avif",
  "img/img7.avif",
  "img/img8.webp",
  "img/img9.webp",
  "img/img10.webp",
];

let startCitations = [
  "Hier est un mystère, demain est une énigme,",
  "Si parler à soi-même est le signe de la sagesse, alors",
  "Je préfère être un oignon, car dans la vie,",
  "Dans la quête de l'invisible, j'ai finalement découvert que j'étais",
  "L'optimisme est d'attendre un arc-en-ciel après une pluie de grenouilles",
  "Pourquoi remettre à demain ce que l'on peut faire après-demain ? La procrastination est",
  "Les poissons volants n'ont jamais peur de tomber",
];

let endCitations = [
  "et aujourd'hui est un cadeau. C'est pourquoi on l'appelle le présent, même si c'est souvent déballé en retard.",
  "écouter les murs est le summum de l'intelligence.",
  "avoir plusieurs couches et faire pleurer les gens en partant est une forme d'art.",
  "transparent au monde des choses visibles.",
  "le réalisme est de comprendre qu'il vient souvent avec un orage de canards.",
  "la meilleure façon de s'assurer que le futur existe.",
  "ils craignent plutôt l'atterrissage dans des aquariums sans eau.",
];

let authors = [
  "Nelson Mandelabas",
  "Martin Luther BurgerKing",
  "Charles de Gaulle d'Espagne",
  "Pierre Corneille & Bernille",
  "Antoine de Saint-Martin-De-paris",
  "Emmanuel Maçon",
  "Donald Duck",
];

newQuoteBtn.addEventListener("click", function () {
  const startIndex = getRandomIndex(startCitations.length);
  const endIndex = getRandomIndex(endCitations.length);
  const authorIndex = getRandomIndex(authors.length);

  quote.textContent = `"${startCitations[startIndex]} ${endCitations[endIndex]}" — ${authors[authorIndex]}`;

  const newBackgroundUrl = images[getRandomIndex(images.length)];
  quoteContainer.style.backgroundImage = `url("${newBackgroundUrl}")`;

  const fonts = [
    "Arial, sans-serif",
    "Georgia, serif",
    "Times New Roman, serif",
    "Verdana, sans-serif",
    "Courier New, monospace",
  ];
  quote.style.fontFamily = fonts[getRandomIndex(fonts.length)];
});
