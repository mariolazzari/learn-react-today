import IngredientList from "./IngredientList";

const Recipe = props => {
  const { name, cookingTime, servings, instructions, ingredients } = props;

  return (
    <div>
      <div>
        <h3>{name}</h3>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
        <span>Cook time</span>
        <span>{cookingTime}</span>
      </div>

      <div>
        <span>Servings:</span>
        <span>{servings}</span>
      </div>

      <div>
        <span>Instructions:</span>
        <div>{instructions}</div>
      </div>

      <div>
        <span>Ingredients:</span>
        <div>
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
