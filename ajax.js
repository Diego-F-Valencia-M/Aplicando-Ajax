// URLS
const URL_POKEMON = "https://pokeapi.co/api/v2/pokemon/?limit=151";
const JSON_POST = "https://jsonplaceholder.typicode.com/posts";

// DOM
const container = document.querySelector("#container");
const btn = document.querySelector("#button");
const form = document.querySelector("#form");

// FUNCIONES
const capitalize = (str) => {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}

//LISTENERS
btn.addEventListener("click", () => {
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
