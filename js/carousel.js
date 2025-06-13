const games = [
  {
    title: "Dungeon Reaper",
    price: "R$6,49",
    image: "/img/placeholder.png",
    oldPrice: "R$12,99",
    discount: "-50%",
  },
  {
    title: "Echoes of Oblivion",
    price: "R$17,99",
    image: "/img/placeholder.png",
    oldPrice: "R$29,99",
    discount: "-40%",
  },
  {
    title: "Cardborn Chaos",
    price: "R$27,99",
    image: "/img/placeholder.png",
    oldPrice: "R$39,99",
    discount: "-30%",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");

  // Load external template
  fetch("/modules/card-huge-discount.html")
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
        clone.querySelector(".oldPrice").textContent = game.oldPrice || "";
        clone.querySelector(".discount").textContent = game.discount || "";

        carousel.appendChild(clone);
      });

      setTimeout(() => {
        carousel.offsetHeight;
        new Flickity(carousel, {
          cellAlign: "center",
          autoPlay: false,
          draggable: false,
          wrapAround: true,
          prevNextButtons: true,
          pageDots: true,
        });
      });
    })
    .catch((err) => console.error("Error loading template:", err));
});
