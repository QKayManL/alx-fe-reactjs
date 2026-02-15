import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find(
      (item) => item.id === parseInt(id)
    );
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="p-6 text-center text-red-500">Recipe not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />

        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-6">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
