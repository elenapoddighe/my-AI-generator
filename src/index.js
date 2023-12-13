function displayRecipe(response) {
  console.log("Recipe generated");

  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInputElement = document.querySelector("#prompt-instructions");
  let apiKey = "e52093t32d4f473a570bb10aoa2ca4e0";
  let context =
    "You are a recipe expert and love to share recipes about worldwide food. Your mission is to generate one easy recipe for each ingredient in basic HTML. Sign the recipe with 'SheCodes AI'. 'SheCodes AI' must be inside a <strong> element at the bottom of the recipe and NOT at the beginning. Do include a black title to the recipe. Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate a recipe about ${instructionsInputElement.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `⏳ Generating a yummy recipe with ${instructionsInputElement.value} for you. While I work on it, why don't you pour yourself a 🍷/🍺?`;

  console.log("Generating recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
