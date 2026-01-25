import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter(
        (recipe) => recipe.id !== Number(id)
      ),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === Number(updatedRecipe.id)
          ? updatedRecipe
          : recipe
      ),
    })),
}));
