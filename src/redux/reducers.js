import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 1,
  categories: [],
  cats: [],
};

export const catSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
      state.cats = [];
    },
    setCategories: (state, action) => {
      state.categories = [...action.payload];
    },
    setCats: (state, action) => {
      state.cats = [...state.cats, ...action.payload];
    },
  },
});

export const { setCategoryId, setCategories, setCats } = catSlice.actions;

export default catSlice.reducer;
