import RecipeList from "./RecipeList";
import "../css/app.css";

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    cookTime: "1:45",
    servings: 3,
    instructions:
      "1. Add chicken to the pot and cook for 30 minutes.\n2. Add chicken stock and bring to a boil.\n3. Add chicken pieces and cook for another 30 minutes.",
    ingredients: [
      { id: 1, name: "Chicken", amount: "2 punds" },
      { id: 2, name: "Salt", amount: "2 tbl" },
    ],
  },
  {
    id: 2,
    name: "Fried Chicken",
    cookTime: "0:45",
    servings: 3,
    instructions:
      "1. Add chicken to the pot and cook for 30 minutes. \n. Add chicken stock and bring to a boil.\n3. Add chicken pieces and cook for another 30 minutes.",
    ingredients: [
      { id: 1, name: "Chicken", amount: "2 libs" },
      { id: 2, name: "Salt", amount: "2 tbl" },
    ],
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
