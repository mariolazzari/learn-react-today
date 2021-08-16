import { useState, createContext, useEffect } from "react";
import RecipeList from "./RecipeList";
import "../css/app.css";
import { v4 as uuidv4 } from "uuid";

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

const LOCAL_STORAGE_KEY = "cookingWIthReact.recipes";
export const RecipeContext = createContext();

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  const handleRecipeAdd = () => {
    const newRecipe = {
      id: uuidv4(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "Intruc,",
      ingredients: [{ id: uuidv4(), name: "Name", amount: "1 Tbs" }],
    };

    setRecipes([...recipes, newRecipe]);
  };

  const handleRecipeDelete = id => {
    setRecipes(recipes.filter(r => r.id !== id));
  };

  const RecipeContextValue = { recipes, handleRecipeAdd, handleRecipeDelete };

  useEffect(() => {
    const recipes = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipes) {
      setRecipes(JSON.parse(recipes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  return (
    <RecipeContext.Provider value={RecipeContextValue}>
      <RecipeList />
    </RecipeContext.Provider>
  );
}

export default App;
