import searchReducer from '../features/search/searchSlice.js';
import postPreviewsReducer from '../features/posts/postPreviewsSlice';
import subredditsReducer from '../features/subredditsSlice';
import filterReducer from '../features/filter/filterSlice';
//import allRecipesReducer from '../features/allRecipes/allRecipesSlice.js';
import { configureStore } from '@reduxjs/toolkit'; 

export default configureStore({
  reducer: {
    postPreviews: postPreviewsReducer,
    search: searchReducer,
    subreddits: subredditsReducer,
    filter: filterReducer
    //allRecipes: allRecipesReducer
  }
});