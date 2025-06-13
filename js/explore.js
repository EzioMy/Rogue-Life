const games = [
  {
    name: "Rogue Depths",
    image: "/img/placeholder.png",
    price: "R$19,90",
    oldPrice: "R$39,90",
    discount: "-50%",
  },
  {
    name: "Shadow Maze",
    image: "/img/placeholder.png",
    price: "R$29,90",
    oldPrice: "R$39,90",
    discount: "-25%",
  },
  {
    name: "Crypt Hunter",
    image: "/img/placeholder.png",
    price: "R$15,00",
  },
  {
    name: "Deadlight Escape",
    image: "/img/placeholder.png",
    price: "R$22,50",
    oldPrice: "R$45,00",
    discount: "-50%",
  },
  {
    name: "Soulbound Trial",
    image: "/img/placeholder.png",
    price: "R$34,90",
  },
  {
    name: "Abyss Reborn",
    image: "/img/placeholder.png",
    price: "R$17,90",
    oldPrice: "R$35,80",
    discount: "-50%",
  },
  {
    name: "Necro Run",
    image: "/img/placeholder.png",
    price: "R$10,00",
  },
  {
    name: "Dungeonfall",
    image: "/img/placeholder.png",
    price: "R$27,90",
    oldPrice: "R$39,90",
    discount: "-30%",
  },
  {
    name: "Void Bastards",
    image: "/img/placeholder.png",
    price: "R$49,99",
  },
  {
    name: "Titan's Descent",
    image: "/img/placeholder.png",
    price: "R$19,99",
    oldPrice: "R$39,99",
    discount: "-50%",
  },
  {
    name: "Project Lazarus",
    image: "/img/placeholder.png",
    price: "R$14,90",
  },
  {
    name: "Maze of the Lost",
    image: "/img/placeholder.png",
    price: "R$12,00",
    oldPrice: "R$24,00",
    discount: "-50%",
  },
  {
    name: "Iron Depths",
    image: "/img/placeholder.png",
    price: "R$44,90",
  },
  {
    name: "Ghost Protocol: Reborn",
    image: "/img/placeholder.png",
    price: "R$18,90",
    oldPrice: "R$27,00",
    discount: "-30%",
  },
  {
    name: "Warden's Trial",
    image: "/img/placeholder.png",
    price: "R$9,90",
  },
   {
    name: "Blightbound Legacy",
    image: "/img/placeholder.png",
    price: "R$23,90",
    oldPrice: "R$47,80",
    discount: "-50%",
  },
  {
    name: "Dread Sanctum",
    image: "/img/placeholder.png",
    price: "R$31,90",
  },
  {
    name: "Forgotten Depths",
    image: "/img/placeholder.png",
    price: "R$19,99",
    oldPrice: "R$39,99",
    discount: "-50%",
  }
];

const container = document.getElementById("games-container");

games.forEach((game) => {
  const card = document.createElement("div");
  if (game.discount) {
    card.classList.add("promotion");
  }
  card.classList.add("game-card");

  card.innerHTML = `
     <img src="${game.image}" alt="${game.name}" />
    <h3>${game.name}</h3>
    <div class="price-section">
      ${game.discount ? `<span class="discount">${game.discount}</span>` : ""}
      <div class="price-info">
        <span class="price">${game.price}</span>
        ${game.oldPrice ? `<span class="old-price">${game.oldPrice}</span>` : ""}
      </div>
    </div>
    <button class="add-to-cart">Adicionar ao Carrinho</button>
  `;

  container.appendChild(card);
});
