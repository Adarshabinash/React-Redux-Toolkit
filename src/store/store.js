//To create a store, we have to configure store from the rtk

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";

const store = configureStore({
  reducer: { counterSlice },
});

export default store;
