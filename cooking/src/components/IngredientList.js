import Ingredient from "./Ingredient";

const IngredientList = ({ ingredients }) => {
  const ingredientElements = ingredients.map(ingredient => (
    <Ingredient key={ingredient.id} {...ingredient} />
  ));

  return <div className="ingredients-grid">{ingredientElements}</div>;
};

export default IngredientList;
