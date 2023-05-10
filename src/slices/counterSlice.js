//Unlike different actions that we had separate in our legacy redux, in rtk, we have the option of slices that we make with the help of createSlice. These slices hold our initial state, the name of our reducer and the reducer functionality according to our actions in the same file.

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  //we have to export our slice.
  name: "count",
  initialState: 0,
  reducers: {
    //Yes, these are plain functions. Afterall reducers are functions.
    increment: (state) => {
      //Since it will need a state to start with.
      return state + 1;
    },
    decrement: (state) => {
      return state - 1;
    },
    //increment and decrement both are our actions.Isn't it awesome we directly create our actions with their proper state change within the same reducers!
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
//ultimately we have to export the reducer as default since it will have to be fetched first.
