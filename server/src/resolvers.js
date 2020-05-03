import fs from 'fs';

const json = JSON.parse(fs.readFileSync(__dirname + '/recipes.json'));
const { recipes } = json;

const toLowerCase = (array) => {
  return array.map(item => item.toLowerCase());
}

const resolvers = {
  Query: {
    recipes: (parent, args, context, info) => {
      const first = args.first ? args.first : recipes.length;
      let result = recipes.slice(0, first);

      if (args.search) {
        for (const str of args.search) {
          const searchString = str.toLowerCase();

          result = result.filter(recipe => {
            let { name, ingredients, instructions } = recipe;

            name = toLowerCase([name])[0];
            ingredients = toLowerCase(ingredients);
            instructions = toLowerCase(instructions);

            return name.includes(searchString)
              || ingredients.filter(ingredient => ingredient.includes(searchString)).length > 0
              || instructions.filter(instruction => instruction.includes(searchString)).length > 0;
          });
        }
      }

      return result;
    },
    count: (parent, args, context, info) => {
      return recipes.length;
    }
  }
};

export default resolvers;