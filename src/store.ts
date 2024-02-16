import { configureStore } from "@reduxjs/toolkit";
import animationReducer from "./features/animationSlice";
import selectedComponentReducer from "./features/selectedComponentSlice"

const store = configureStore({
  reducer: {
    animation: animationReducer,
    selectedComponent: selectedComponentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
