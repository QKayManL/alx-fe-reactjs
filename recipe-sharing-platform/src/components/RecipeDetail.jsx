import { useParams, Link } from "react-router-dom";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();

  const recipe = data.find((item) => item.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="p-6 text-center text-red-500">
        Recipe not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      
      <Link 
        to="/" 
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        ← Back to Home
      </Link>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">
            {recipe.title}
          </h1>

          <p className="text-gray-700 mb-6">
            {recipe.summary}
          </p>

          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">
              Ingredients & Instructions
            </h2>

            <p className="text-gray-600">
              (Detailed instructions would go here)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
