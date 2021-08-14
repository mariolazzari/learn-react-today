import RecipeList from "./RecipeList";

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    cookTime: "1:45",
    servings: 3,
    instrunctions:
      "1. Add chicken to the pot and cook for 30 minutes. 2. Add chicken stock and bring to a boil. 3. Add chicken pieces and cook for another 30 minutes.",
  },
  {
    id: 2,
    name: "Fried Chicken",
    cookTime: "0:45",
    servings: 3,
    instrunctions:
      "1. Add chicken to the pot and cook for 30 minutes. 2. Add chicken stock and bring to a boil. 3. Add chicken pieces and cook for another 30 minutes.",
  },
];

function App() {
  return (
    <div>
      <RecipeList recipes={sampleRecipes} />
    </div>
  );
}

export default App;
