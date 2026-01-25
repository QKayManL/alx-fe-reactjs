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


    searchTerm: '',
filterRecipes: () =>
  set((state) => ({
    filteredRecipes: state.searchTerm
      ? state.recipes.filter((recipe) =>
          recipe.title
            .toLowerCase()
            .includes(state.searchTerm.toLowerCase())
        )
      : state.recipes,
  })),


}));
