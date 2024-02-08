fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  // looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log("product.discount:", product.discount);
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;
  // lav en kopi
  const copy = template.cloneNode(true);
  // ændre indhold
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  copy.querySelector("h3").textContent = product.productdisplayname;

  copy.querySelector("p.subtle").textContent = product.articletype + " - " + product.brandname;
  //   pris og discount
  copy.querySelector("p.price").textContent = product.price + ",- DKK";
  copy.querySelector("p.discountpr").textContent = product.discount + " %";

  if (product.soldout === 1) {
    // produktet er udsolgt
    copy.querySelector(".soldout_div").textContent = `Sold out`;
    copy.querySelector(".soldout_div").classList.add("soldout_box");
    copy.querySelector("img").classList.add("soldout_img");
  } else {
    copy.querySelector(".soldout_div").classList.add("hide");
  }

  if (product.discount === null) {
    // produktet er ikke on sale soldout_div
    copy.querySelector(".discounted").classList.add("hide");
  } else {
    let discountDecimal = product.discount / 100;
    let discountPrice = product.price - product.price * discountDecimal;
    copy.querySelector(".discountprice").textContent = `Now ${Math.floor(discountPrice)},- DKK`;
    // copy.querySelector(".price span").textContent = "Hello";
  }

  copy.querySelector(".read_more").setAttribute("href", `produkt.html?id=${product.id}`);
  // appende
  document.querySelector(".grid_produktliste").appendChild(copy);
}
