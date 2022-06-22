import searchReducer from '../features/search/searchSlice.js';
//import allRecipesReducer from '../features/allRecipes/allRecipesSlice.js';
import { configureStore } from '@reduxjs/toolkit'; 

export default configureStore({
  reducer: {
    //favoriteRecipes: favoriteRecipesReducer,
    search: searchReducer,
    //allRecipes: allRecipesReducer
  }
});