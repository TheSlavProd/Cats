import { configureStore } from "@reduxjs/toolkit";
import catReducer from "./reducers";
export const store = configureStore({
  reducer: { cats: catReducer },
});
