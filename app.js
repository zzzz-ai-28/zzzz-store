const products = [
  {
    title: "T-Shirt - Urban White",
    description: "تيشيرت أبيض عصري بتصميم بسيط، مناسب للمناسبات اليومية.",
    price: "220 جنيه",
    image: "https://images.unsplash.com/photo-1602810318383-2b61e6b27c81?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "T-Shirt - Street Black",
    description: "تيشيرت أسود ستايل ستريت، قطن خالص، قصّة مريحة.",
    price: "240 جنيه",
    image: "https://images.unsplash.com/photo-1618354690781-f3ddf6b7cf83?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "T-Shirt - Graphic Rebel",
    description: "تيشيرت برسومات شبابية مميزة، مناسب للمظهر الكاجوال.",
    price: "260 جنيه",
    image: "https://images.unsplash.com/photo-1520975922203-29a1473a08d3?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Hoodie - Classic Black",
    description: "هودي أسود بسيط بأكمام واسعة، مناسب للخريف والشتاء.",
    price: "350 جنيه",
    image: "https://images.unsplash.com/photo-1618354691373-71832157b14c?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Hoodie - Gray Oversized",
    description: "هودي رمادي واسع، مريح جدًا وأنيق في اللبس اليومي.",
    price: "370 جنيه",
    image: "https://images.unsplash.com/photo-1602293589930-ebfd3dbb1dc4?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Hoodie - Street Beige",
    description: "هودي بيج بتصميم عصري، مناسب لأجواء الخروج والجامعة.",
    price: "390 جنيه",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1b7?auto=format&fit=crop&w=400&q=80"
  },
];


const container = document.getElementById("products");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
    <h2>${product.title}</h2>
    <p>${product.description}</p>
    <span class="price">${product.price}</span>
  `;
  container.appendChild(card);
});
