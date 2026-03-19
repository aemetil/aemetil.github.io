// Jokes aléatoires
const jokes = [
  "404: Motivation not found",
  "TODO: faire un vrai portfolio",
  "Ce site est validé par le département du maïs",
  "Deploy prévu : quand le 'corn ice cream' arrête de danser",
  "console.log('portfolio bientôt prêt')",
  "Je promets que je code mieux que ce site.",
  "Ce site charge plus vite que mes projets terminent",
  "Powered by chocolate, confusion and questionable decisions 🤔",
  "Si vous cherchez mes projets… moi aussi",
];

document.getElementById("joke").textContent =
  jokes[Math.floor(Math.random() * jokes.length)];

// affche année en cours
document.getElementById("year").textContent = new Date().getFullYear();

// Fade-in animation on scroll
const sections = document.querySelectorAll("section");
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);
sections.forEach((section) => {
  section.classList.add("fade-in-hidden");
  observer.observe(section);
});


// Compteur avec CountAPI
// Variable pour stocker la valeur du compteur
/* let counter;

// Incrémente compteur côté CountAPI & récupère la valeur
fetch('https://api.countapi.xyz/hit/ae_portfolio/visiteurs')
  .then(res => res.json())
  .then(data => {
    counter = data.value;  // stocke la valeur pour une next use

    // show compteur
    displayCounter();
  })
  .catch(err => console.error('Erreur CountAPI:', err));

// fonction pour afficher le compteur
function displayCounter() {
  const counterEl = document.getElementById('counter');
  if (counterEl && counter !== undefined) {
    counterEl.innerText = counter;
  }
} */