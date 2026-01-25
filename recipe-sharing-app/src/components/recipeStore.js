// src/components/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  // existing state
  recipes: [],
  // Search/filter (task 2)
  searchTerm: '',
  filteredRecipes: [],

  // === Task 3 additions ===
  favorites: [],               // store favorite recipe ids
  recommendations: [],        // computed recommendations (array of recipes)

  // existing actions
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== Number(id)),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === Number(updatedRecipe.id) ? updatedRecipe : r
      ),
    })),

  // Task 2 helpers
  setSearchTerm: (term) => set(() => ({ searchTerm: term })),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.searchTerm
        ? state.recipes.filter((recipe) =>
            recipe.title
              .toLowerCase()
              .includes(state.searchTerm.toLowerCase())
          )
        : state.recipes, // important: default to all recipes when search is empty
    })),

  // === Task 3 actions ===
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // A simple mock recommendation generator: recommend recipes NOT already favorited
  // You can improve later (more sophisticated logic). For now it provides some results.
  generateRecommendations: () =>
    set((state) => {
      // find candidate recipes that are not favorites
      const candidates = state.recipes.filter(
        (r) => !state.favorites.includes(r.id)
      );
      // simple, pick up to 5 randomly
      const shuffled = candidates.sort(() => Math.random() - 0.5);
      const recommended = shuffled.slice(0, 5);
      return { recommendations: recommended };
    }),
}));
