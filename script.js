const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  console.log("1");
  burger.classList.toggle("change");
});

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".purchaseBox h3").textContent = product.productdisplayname;
  document.querySelector(".img_produkt").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("p.subtle_produkt").textContent = product.articletype + " - " + product.brandname;
  document.querySelector("dl .name").textContent = product.variantname;
  document.querySelector("dl .color").textContent = product.basecolour;
  document.querySelector("dl .id_number").textContent = product.id;
  document.querySelector(".info h1").textContent = product.brandname;
  document.querySelector(".info p").textContent = product.brandbio;
}
