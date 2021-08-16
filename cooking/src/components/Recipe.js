import { useContext } from "react";
import IngredientList from "./IngredientList";
import { RecipeContext } from "./App";

const Recipe = props => {
  const { id, name, cookingTime, servings, instructions, ingredients } = props;
  const { handleRecipeDelete } = useContext(RecipeContext);

  return (
    <div className="recipe">
      <div className="recipe-header">
        <h3 className="recipe-title">{name}</h3>
        <div>
          <button className="btn btn-primary mr-1">Edit</button>
          <button
            className="btn btn-danger"
            onClick={() => handleRecipeDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="recipe-row">
        <span className="recipe-label">Cook time</span>
        <span className="recipe-value">{cookingTime}</span>
      </div>

      <div className="recipe-row">
        <span className="recipe-label">Servings:</span>
        <span className="recipe-value">{servings}</span>
      </div>

      <div className="recipe-row">
        <span className="recipe-label">Instructions:</span>
        <div className="recipe-value recipe-value-ind recipe-instructions">
          {instructions}
        </div>
      </div>

      <div className="recipe-row">
        <span className="recipe-label">Ingredients:</span>
        <div className="recipe-value">
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
