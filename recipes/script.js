

fetch(
  "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=8d922c31&app_key=af905ade37b309ff4539c4999530672a"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".recipe_name").innerHTML =
      data.hits[0].recipe.label;
    document.querySelector(".recipt_link").innerHTML = data.hits[0].recipe.url;
    
    // const arrayIngredientLines = [data.hits[0].recipe.ingredientLines];
    // for (let i = 0; i < arrayIngredientLines.length; i++) {
    //     const element = arrayIngredientLines[i];
    //    let columnIngredientLi = document.createElement('li')
    //    columnIngredientLi.innerHTML = element;
    // }
   

     document.querySelector(".ingredients_recipe_list").innerHTML =
      data.hits[0].recipe.ingredientLines;


    document.querySelector(".calories").innerHTML =
      Math.round(data.hits[0].recipe.calories) +
      " " +
      "total" +
      " " +
      "calories.";
    document.querySelector(
      ".foto_dish"
    ).innerHTML = `<img src="${data.hits[0].recipe["image"]}" alt="foto_dish"/>`;
  function f1 () {
let but = document.querySelector('.totalNutrientsd').innerHTML = data.hits[0].recipe.totalNutrients;

  }
document.querySelector(".totalNutrientsd").onclick = f1;




  });

//ingredientLines
//data.hits[0].recipe.image
