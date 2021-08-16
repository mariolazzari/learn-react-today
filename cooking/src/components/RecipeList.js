import { useContext } from "react";
import Recipe from "./Recipe";
import { RecipeContext } from "./App";

const RecipeList = () => {
  const { recipes, handleRecipeAdd } = useContext(RecipeContext);

  return (
    <div className="recipe-list">
      <div>
        {recipes.map(recipe => (
          <Recipe key={recipe.id} {...recipe} />
        ))}
      </div>

      <div className="btn-add-recipe">
        <button className="btn btn-primary" onClick={handleRecipeAdd}>
          Add Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeList;
