import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./slices/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counterSlice);
  //This is state.counterSlice because out of all our states we are going for the state in our counterSlice (which of course holds the state that we need)

  const dispatch = useDispatch();
  return (
    <div className="myCounter">
      <h1>Redux-Toolkit Counter</h1>
      <br />
      <h2>My Count: {count}</h2>
      <br />
      <div className="buttons">
        <button onClick={() => dispatch(decrement())}>Decrease</button>
        <button onClick={() => dispatch(increment())}>Increase</button>
      </div>
    </div>
  );
};

export default Counter;
