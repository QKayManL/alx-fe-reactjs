// src/components/FavoritesList.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  // take favorites (ids) then map to recipe objects
  const favorites = useRecipeStore((s) =>
    s.favorites.map((id) => s.recipes.find((r) => r.id === id)).filter(Boolean)
  );
  const removeFavorite = useRecipeStore((s) => s.removeFavorite);

  if (!favorites.length) return <div><h3>My Favorites</h3><p>No favorites yet.</p></div>;

  return (
    <div>
      <h3>My Favorites</h3>
      {favorites.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: 12 }}>
          <h4>{recipe.title}</h4>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavorite(recipe.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
