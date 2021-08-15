import Ingredient from "./Ingredient";

const IngredientList = ({ ingredients }) => {
  const ingredientElements = ingredients.map(ingredient => (
    <Ingredient key={ingredient.id} {...ingredient} />
  ));

  return <div>{ingredientElements}</div>;
};

export default IngredientList;
