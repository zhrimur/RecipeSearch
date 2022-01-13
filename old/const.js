let filtArray = [];
let urlArray = [];
let urlCounter = 0;
let i = 0;
let butFilt = document.getElementById("but_filter");
let promise;
let chk, obj;
let url = "https://api.edamam.com/api/recipes/v2?type=public";
let ingredientLines, filler, q, x, to;
let keyArray = [
  { name: "q", value: q },
  { name: "app_id", value: "8d922c31" },
  { name: "app_key", value: "af905ade37b309ff4539c4999530672a" },
];
let submit = document.getElementById("submit");
