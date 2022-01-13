urlCreation(); //формирование стандартной ссылки для обращения к api
prom(); //запрос, отрисовка стандартных данных
//кнопки
document.querySelector(".next").addEventListener("click", next);
document.querySelector(".prev").addEventListener("click", prev);
butFilt.addEventListener("click", showFilter);
document.addEventListener("change", filter);
//------
submit.addEventListener("click", () => {
  urlArray = []; //очистка массива ссылок
  urlCounter = 0; //сброс счетчика ссылок
  i = 0; //сброс счетчика страниц для нового запроса
  if (document.querySelector(".search_field").value) {
    q = document.querySelector(".search_field").value;
  } //проверка валидности поискового запроса
  keyArray[0].value = q; //применение поискового запроса
  keyArray = keyArray.concat(filtArray); //применение фильтров
  urlCreation(); //формирование ссылки для обращения к api с учетом запроса и фильтров
  prom(); //запрос, отрисовка данных
  document.querySelector(".search_field").value = ""; //очистка поискового поля
});
