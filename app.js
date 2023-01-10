
// https://www.themealdb.com/api/json/v1/1/search.php?s=tomato

const result = document.getElementById("result");
const form = document.querySelector("form");
const input = document.querySelector("input");
let meals = [];


async function fetchMeals(search) {
    await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((response) => response.json())
    .then((data) => (meals = data.meals));

    console.log(meals);
}
function mealsDisplay() {
    if(meals === null) {
        result.innerHTML = "<h2>Aucun résultat</h2>";
    } else {

        // se Limiter à 12 recettes
        meals.length = 12
        
        result.innerHTML = meals.map((meal) => 
        `
        <li class="card"
        <h2>${meal.strMeal}</h2>
        <p>${meal.strArea}</p>
        <img src=${meal.strMealThumb} alt="photo ${meal.strMeal}">
        <ul>
        
        </ul>
        </li>
        `
        ).join("");
    }
}

input.addEventListener('input', (e) => {
    fetchMeals(e.target.value);
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    mealsDisplay();

});