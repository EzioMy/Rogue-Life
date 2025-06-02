const games = [
  { title: "Vampire Survivors", price: "$24.99", image: "/img/games/carousel1.jpg" },
  { title: "Risk Of Rain 2: Survivors of the Void", price: "$14.99", image: "/img/games/carousel2.jpg" },
  { title: "Balatro", price: "$19.99", image: "/img/games/carousel3.jpg" },
];
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");

  // Load external template
  fetch("/modules/card-huge.html")
    .then((res) => {
      if (!res.ok) throw new Error("Failed to load template");
      return res.text();
    })
    .then((html) => {
      // Inject the template into a temporary element
      const tempContainer = document.createElement("div");
      tempContainer.innerHTML = html;
      const template = tempContainer.querySelector("template");

      games.forEach((game) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector("img").src = game.image;
        clone.querySelector("img").alt = game.title;
        clone.querySelector(".title").textContent = game.title;
        clone.querySelector(".price").textContent = game.price;
        carousel.appendChild(clone);
      });

      setTimeout(() => {
        carousel.offsetHeight;
        new Flickity(carousel, {
          cellAlign: "center",
          autoPlay: true,
          draggable: false,
          wrapAround: true,
          prevNextButtons: true,
          pageDots: true,
        });
      });
    })
    .catch((err) => console.error("Error loading template:", err));
});
