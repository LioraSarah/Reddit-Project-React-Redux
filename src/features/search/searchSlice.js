import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
      // Add initial state properties here.
      searchTerm: ''
    },
    // Add extraReducers here.
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        clearSearchTerm(state) {
            state.searchTerm = ''
        }
    }
});

export const selectSearchTerm = (state) => state.searchTerm;
export const {setSearchTerm, clearSearchTerm} = searchSlice.actions;
export default searchSlice.reducer;