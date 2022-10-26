import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPostComments } from '../api/reddit';

export const loadAllComments = createAsyncThunk(
  'comments/loadAllComments',
  async (permalink) => {
    const comments = await getPostComments(permalink);
    return comments[1].data.children.map((subreddit) => subreddit.data);
  }
);

export const subredditsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    postParent: 0, //should be post id
    isLoadingPostComments: false,
    hasError: false
  },
//   reducers: {
//     showMoreComments(state, action) {
//       const { newSubreddit } = action.payload;
//       state.currentSubreddit = newSubreddit;
//     }
//   },
  extraReducers: (builder) => {
    builder
      .addCase(loadAllComments.pending, (state) => {
        state.isLoadingPostComments = true;
        state.comments = false;
      })
      .addCase(loadAllComments.fulfilled, (state, action) => {
        state.isLoadingPostComments = false;
        state.comments = action.payload;
      })
      .addCase(loadAllComments.rejected, (state) => {
        state.isLoadingPostComments = false;
        state.hasError = true;
        state.comments = [];
      })
  },
});

export const selectAllComments = (state) => state.comments.comments;
// export const selectCurrentSubreddit = (state) => state.subreddits.currentSubreddit;

export const isLoading = (state) => state.comments.isLoadingComments;

export const { changeCurrentSubreddit } = subredditsSlice.actions;

export default subredditsSlice.reducer;
