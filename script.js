let filtArray = [];
let chk;
let url = "https://api.edamam.com/api/recipes/v2?type=public";
let ingredientLines, promise, q, i, x;
let keyArray = [
  { name: "q", value: q },
  { name: "app_id", value: "8d922c31" },
  { name: "app_key", value: "af905ade37b309ff4539c4999530672a" },
];
let submit = document.getElementById("submit");
let elementChecked = document.querySelector("input[type=checkbox]");

urlCreation();
promise = fetch(url);
promise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    i = 1;
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

//фильтр
document.addEventListener("change", function (event) {
  chk = event.target;
  if (chk.checked === true) {
    console.log(chk.name, chk.value, chk.checked);
    obj = { name: chk.name, value: chk.value };
    filtArray.push(obj);
  }
  if (chk.checked === false) {
    filtArray = filtArray.filter((element) => element.value !== chk.value);
  }
  console.log(filtArray);
});
//

submit.addEventListener("click", () => {
  if (document.querySelector(".search_field").value) {
    q = document.querySelector(".search_field").value;
  }

  //фильтр калорийности
  if (document.querySelector("#min").value) {
    min = document.querySelector("#min").value;
    console.log(min);
  }
  if (document.querySelector("#max").value) {
    max = document.querySelector("#max").value;
    console.log(max);
    keyArray.push({ name: "calories", value: `${min}-${max}` });
  }
  //

  keyArray = [
    { name: "q", value: q },
    { name: "app_id", value: "8d922c31" },
    { name: "app_key", value: "af905ade37b309ff4539c4999530672a" },
  ];
  keyArray = keyArray.concat(filtArray);
  console.log(keyArray);
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

  //очистка
  document.querySelector(".search_field").value = "";
  keyArray = [
    { name: "q", value: q },
    { name: "app_id", value: "8d922c31" },
    { name: "app_key", value: "af905ade37b309ff4539c4999530672a" },
  ];
  //
});
