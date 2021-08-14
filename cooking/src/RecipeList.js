import Recipe from "./Recipe";

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.map(recipe => (
        <Recipe key={recipe.id} {...recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
