let keyArray = [];
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
  urlCreation();
  promise = fetch(url);
  promise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
  document.querySelector(".search").value = "";
});
