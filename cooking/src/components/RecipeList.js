import Recipe from "./Recipe";

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      <div>
        {recipes.map(recipe => (
          <Recipe key={recipe.id} {...recipe} />
        ))}
      </div>

      <div className="btn-add-recipe">
        <button className="btn btn-primary">Add Recipe</button>
      </div>
    </div>
  );
};

export default RecipeList;
