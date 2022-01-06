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

//фильтр
function showFilter() {
  document.getElementById("myDropdown").classList.toggle("show");
}
