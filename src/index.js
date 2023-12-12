function generateRecipe(event) {
  event.preventDefault();
  let recipeElement = document.querySelector("#recipe");

  new Typewriter("#recipe", {
    strings: "This is your recipe",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
