let keyArray = [
  { name: "q", value: "chicken" },
  { name: "app_id", value: "8d922c31" },
  { name: "app_key", value: "af905ade37b309ff4539c4999530672a" },
];
let filtArray = [];
let url = "https://api.edamam.com/api/recipes/v2?type=public";
let promise, q, i, x;
let submit = document.getElementById("submit");
let ingredientLines;

function showFilter() {
  document.getElementById("myDropdown").classList.toggle("show");
}

let elementChecked = document.querySelector("input[type=checkbox]");
document.addEventListener("change", function () {
  var chk = event.target;
  if (chk.checked === true) {
    console.log(chk.name, chk.value, chk.checked);
    filtArray.push({ name: chk.name, value: chk.value });
  } else {
    filtArray.splice(chk.checked === false, 1);
  }
  console.log(filtArray);
});

function urlCreation() {
  url = "https://api.edamam.com/api/recipes/v2?type=public";
  keyArray.forEach((element) => {
    url += `&${element.name}=${element.value}`;
  });
}

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
urlCreation();
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
document.querySelector(".next").addEventListener("click", () => {
  if (i < 20) {
    i++;
    htmlFill(i, x);
  }
});
document.querySelector(".prev").addEventListener("click", () => {
  if (i > 0) {
    i--;
    htmlFill(i, x);
  }
});

submit.addEventListener("click", () => {
  if (document.querySelector(".search_field").value !== "") {
    q = document.querySelector(".search_field").value;
  }
  keyArray = [
    { name: "q", value: q },
    { name: "app_id", value: "8d922c31" },
    { name: "app_key", value: "af905ade37b309ff4539c4999530672a" },
  ];
  if (document.querySelector("#min").value !== "") {
    min = document.querySelector("#min").value;
    console.log(min);
  }
  if (document.querySelector("#max").value !== "") {
    max = document.querySelector("#max").value;
    console.log(max);
    keyArray.push({ name: "calories", value: `${min}-${max}` });
  }
  keyArray = keyArray.concat(filtArray);
  urlCreation();
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
  document.querySelector(".search_field").value = "";
  filtArray = [];
  keyArray = [
    { name: "q", value: q },
    { name: "app_id", value: "8d922c31" },
    { name: "app_key", value: "af905ade37b309ff4539c4999530672a" },
  ];
});
