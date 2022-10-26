import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSubredditPosts, getPostComments } from '../../api/reddit';
import { selectSearchTerm } from '../search/searchSlice';

export const loadAllPreviews = createAsyncThunk(
  'postPreviews/loadAllPreviews',
  async (payload) => {
    console.log(payload);
    const posts = await getSubredditPosts(payload);
    return posts.data.children.map((post) => post.data);
  }
);

export const postPreviewsSlice = createSlice({
  name: 'postPreviews',
  initialState: {
    posts: [],
    isLoadingPostPreviews: false,
    hasError: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAllPreviews.pending, (state) => {
        state.isLoadingPostPreviews = true;
        state.hasError = false;
      })
      .addCase(loadAllPreviews.fulfilled, (state, action) => {
        state.isLoadingPostPreviews = false;
        state.posts = action.payload;
      })
      .addCase(loadAllPreviews.rejected, (state) => {
        state.isLoadingPostPreviews = false;
        state.hasError = true;
        state.posts = [];
      })
  },
});

export const selectFilteredAllPreviews = (state) => {
  const allPreviews = selectAllPreviews(state);
  const searchTerm = selectSearchTerm(state);

  return allPreviews.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const selectAllPreviews = (state) => state.postPreviews.posts;

export const isLoading = (state) => state.postPreviews.isLoadingPostPreviews;

export default postPreviewsSlice.reducer;
