// src/components/RecipeList.jsx
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import FavoritesList from './FavoritesList';
import RecommendationsList from './RecommendationsList';
import React, { useEffect } from 'react';

const RecipeList = () => {
  const { filteredRecipes, filterRecipes, searchTerm } = useRecipeStore((state) => ({
    filteredRecipes: state.filteredRecipes,
    filterRecipes: state.filterRecipes,
    searchTerm: state.searchTerm,
  }));

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
      <div>
        <h2>Recipes</h2>
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
          </div>
        ))}
      </div>

      <aside>
        <SearchBar /> {/* if you already have a SearchBar component in your app */}
        <FavoritesList />
        <RecommendationsList />
      </aside>
    </div>
  );
};

export default RecipeList;
