//создание запроса к api
function urlCreation() {
  url = "https://api.edamam.com/api/recipes/v2?type=public";
  keyArray.forEach((element) => {
    url += `&${element.name}=${element.value}`;
  });
}

//отрисовка пришедших данных
function htmlFill(counter, data) {
  let filler = data.hits[counter].recipe;
  document.querySelector(".recipe_name").innerHTML = filler.label;
  ingredientLines = filler.ingredientLines;
  document.querySelector(".ingredients_recipe_list").innerText = "";
  ingredientLines.forEach((element) => {
    document.querySelector(
      ".ingredients_recipe_list"
    ).innerText += `${element}\n`;
  });
  document.querySelector(".main_img").src = filler.image;
  document.querySelector(".calories").innerHTML = `Calories: ${Math.round(
    filler.calories
  )}`;
  document.querySelector(".recipe_link").href = filler.url;
  document.querySelector(".recipe_link").innerText = filler.source;
  document.querySelector(".dishType").innerText = `Dish: ${filler.dishType}`;
  document.querySelector(
    ".dietLabels"
  ).innerText = `Diet: ${filler.dietLabels}`;
  document.querySelector(
    ".healthLabels"
  ).innerText = `Health: ${filler.healthLabels}`;
  document.querySelector(
    ".totalNutrientsd"
  ).innerText = `Cuisine: ${filler.cuisineType}`;
}

//показать фильтр
function showFilter() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//промис
function prom() {
  promise = fetch(url);
  promise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      i = 0;
      htmlFill(i, data);
      return (x = data);
    });
}

//фильтр
function filter(event) {
  chk = event.target;
  if (chk.checked === true) {
    console.log(chk.name, chk.value, chk.checked);
    obj = { name: chk.name, value: chk.value };
    filtArray.push(obj);
  }
  if (chk.checked === false) {
    filtArray = filtArray.filter((element) => element.value !== chk.value);
  }
}

//фильтр калорийности
function caloriesFilter() {
  keyArray = keyArray.filter((element) => element.name !== "calories");
  if (document.querySelector("#min").value) {
    min = document.querySelector("#min").value;
  }
  if (document.querySelector("#max").value) {
    max = document.querySelector("#max").value;
    keyArray.push({ name: "calories", value: `${min}-${max}` });
  }
}

//кнопки вперед-назад
function next() {
  if (i < 20) {
    i++;
    htmlFill(i, x);
  }
}
function prev() {
  if (i > 0) {
    i--;
    htmlFill(i, x);
  }
}
