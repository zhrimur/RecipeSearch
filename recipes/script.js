let keyArray = [];
let filtArray = [];
//=== обработка фильтра===
let elementChecked = document.querySelector("input[type=checkbox]");
document.addEventListener("change", function () {
  var chk = event.target;
  if (chk.checked === true) {
    console.log(chk.name, chk.value, chk.checked);
    filtArray.push({ name: chk.name, value: chk.value });
  } else {
    //=== убирает элемент из keyArray если снимают выделение с чекбокса ===
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
let url = "https://api.edamam.com/api/recipes/v2?type=public";
let promise;
let submit = document.getElementById("submit");
let q;
submit.addEventListener("click", () => {
  if (document.querySelector(".search").value !== "") {
    q = document.querySelector(".search").value;
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
  //console.log(filtArray);
  keyArray = keyArray.concat(filtArray);
  //console.log(keyArray);
  urlCreation();
  //console.log(url);
  promise = fetch(url);
  promise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
  document.querySelector(".search").value = "";
  filtArray = [];
  keyArray = [
    { name: "q", value: q },
    { name: "app_id", value: "8d922c31" },
    { name: "app_key", value: "af905ade37b309ff4539c4999530672a" },
  ];
});
function showFilter() {
  document.getElementById("myDropdown").classList.toggle("show");
}
//=== Andrei===
//=== функция отображения фильтра ===

//console.log(document.querySelector("#minCalories").value);
//=== обработка поля калорий

// document.addEventListener("inputCal", () => {
//   if (document.querySelector("#minCalories").value !== "") {
//}})

// let calories = document.querySelector("#minCalories").value
// document.addEventListener("inputCal", function () {console.log(calories)})
// document.addEventListener("inputCal", function () {
//   var calorie = event.target;
//   if (minCal.value !== "") {
//     calories = (document.querySelector("#minCalories") + '-' + document.querySelector("#maxCalories"));
//     keyArray.push({name: 'calorie', value: calorie})

//   }
//console.log(calories)
//console.log(keyArray)
//})

// let elementCalories = document.querySelector("dd[name=calories]");
// document.addEventListener("change", function () {
//   var chk = event.target;
//   if (elementCalories) {
//   console.log(chk.dd[id=minCalories], chk.dd[id=minCalories]);
//   keyArray.push(`{name: ${chk.dd[id=minCalories]}, value: ${chk.dd[id=maxCalories]}}` )
//   }
// });
// console.log(keyArray)
