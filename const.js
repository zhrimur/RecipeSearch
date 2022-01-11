let filtArray = [];
let promise;
let chk;
let url = "https://api.edamam.com/api/recipes/v2?type=public";
let ingredientLines, q, i, x;
let keyArray = [
  { name: "q", value: q },
  { name: "app_id", value: "8d922c31" },
  { name: "app_key", value: "af905ade37b309ff4539c4999530672a" },
];
let submit = document.getElementById("submit");
let elementChecked = document.querySelector("input[type=checkbox]");
