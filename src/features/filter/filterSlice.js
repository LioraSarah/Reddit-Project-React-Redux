import { createSlice } from "@reduxjs/toolkit";

const setFilter = () => {
    const stateFilter = localStorage.getItem("filter");
    if (stateFilter) {
       return { filter: stateFilter };
    } else {
       return { filter: "hot" };
    }
};

const initialState = setFilter();

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter(state, action) {
        console.log(action.payload);
      const { newFilter } = action.payload;
      console.log(newFilter + " in changeFilter");
      state.filter = newFilter;
      localStorage.setItem("filter", newFilter);
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;

export const selectFilter = (state) => state.filter.filter;