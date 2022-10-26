import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSubreddits } from '../api/reddit';

export const loadAllSubreddits = createAsyncThunk(
  'subrredits/loadAllSubreddit',
  async () => {
    const subreddits = await getSubreddits();
    return subreddits.data.children.map((subreddit) => subreddit.data);
  }
);

export const subredditsSlice = createSlice({
  name: 'subreddits',
  initialState: {
    subreddits: [],
    currentSubreddit: 'r/popular',
    isLoadingSubreddits: false,
    hasError: false
  },
  reducers: {
    changeCurrentSubreddit(state, action) {
      const { newSubreddit } = action.payload;
      state.currentSubreddit = newSubreddit;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAllSubreddits.pending, (state) => {
        state.isLoadingSubreddits = true;
        state.hasError = false;
      })
      .addCase(loadAllSubreddits.fulfilled, (state, action) => {
        state.isLoadingSubreddits = false;
        state.subreddits = action.payload;
      })
      .addCase(loadAllSubreddits.rejected, (state) => {
        state.isLoadingSubreddits = false;
        state.hasError = true;
        state.subreddits = [];
      })
  },
});

export const selectAllSubreddits = (state) => state.subreddits.subreddits;
export const selectCurrentSubreddit = (state) => state.subreddits.currentSubreddit;

export const isLoading = (state) => state.subreddits.isLoadingPostPreviews;

export const { changeCurrentSubreddit } = subredditsSlice.actions;

export default subredditsSlice.reducer;
