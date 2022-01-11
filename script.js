urlCreation();
prom();
//кнопки
document.querySelector(".next").addEventListener("click", next);
document.querySelector(".prev").addEventListener("click", prev);
document.addEventListener("change", filter);

submit.addEventListener("click", () => {
  if (document.querySelector(".search_field").value) {
    q = document.querySelector(".search_field").value;
  } //проверка валидности поискового запроса
  keyArray[0].value = q; //применение поискового запроса
  caloriesFilter(); //применение фильтра калорийности
  keyArray = keyArray.concat(filtArray); //применение остальных фильтров
  urlCreation();
  prom();
  document.querySelector(".search_field").value = ""; //очистка поискового поля
});
