const fs = require('fs');

const json = JSON.parse(fs.readFileSync(__dirname + '/src/recipes.json'));
const { recipes } = json;

recipes.forEach(recipe => {
  if(!recipe.hasOwnProperty("image")){
    console.log(recipe.name);
  }
});