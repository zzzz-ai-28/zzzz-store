const products = [
  {id:1, name_en:"Classic T-Shirt", name_ar:"تيشيرت كلاسيكي", price:120, img:"https://via.placeholder.com/200x200?text=T-Shirt+1"},
  {id:2, name_en:"Cool Hoodie", name_ar:"هودي رائع", price:250, img:"https://via.placeholder.com/200x200?text=Hoodie+1"},
  {id:3, name_en:"Summer Tee", name_ar:"تيشيرت صيفي", price:100, img:"https://via.placeholder.com/200x200?text=T-Shirt+2"},
];

let lang = localStorage.getItem("lang") || "en";

const productList = document.getElementById("product-list");
const langToggle = document.getElementById("lang-toggle");

function renderProducts() {
  productList.innerHTML = "";
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="\${p.img}" alt="\${lang === "en" ? p.name_en : p.name_ar}" />
      <h3>\${lang === "en" ? p.name_en : p.name_ar}</h3>
      <p>\${lang === "en" ? "Price" : "السعر"}: $\${p.price}</p>
      <button onclick="alert('\${lang === "en" ? "Added to cart!" : "تم الإضافة للسلة!"}')">
        \${lang === "en" ? "Add to Cart" : "أضف للسلة"}
      </button>
    `;
    productList.appendChild(div);
  });
  langToggle.textContent = lang === "en" ? "عربي" : "English";
}

langToggle.addEventListener("click", () => {
  lang = lang === "en" ? "ar" : "en";
  localStorage.setItem("lang", lang);
  renderProducts();
});

renderProducts();
