fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((data) => showCategories(data));

function showCategories(categories) {
  // looper og kalder showCategory
  categories.forEach(showCategory);
}

function showCategory(cat) {
  console.log(cat);
  // fang template
  const template = document.querySelector("#txt_kategori").content;
  // lav en kopi
  const copy = template.cloneNode(true);
  // ændre indhold
  copy.querySelector("a").textContent = cat.category;
  copy.querySelector("a").setAttribute("href", `produktliste.html?category=${cat.category}`);
  // vælg parent
  // append (tilføj kopi til html)
  document.querySelector(".category_list").appendChild(copy);
}
