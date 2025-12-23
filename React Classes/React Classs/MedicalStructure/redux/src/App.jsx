import { useState } from 'react'
import {increment,decrement} from "./features/counterSlice";
//useSelector is use to get the current value from the Redux store
//useDispatch is used to dispatch actions to the Redux store
import {useDispatch, useSelector} from "react-redux";

// App component that displays a counter and buttons to increment and decrement the counter value
function App() {
  //get the current counter value from the Redux store
  const count = useSelector((state) => state.counter.value);
  console.log(count)

  //get the dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch();
  return (

    // JSX structure for a simple counter application
    <>
    <p>{count} </p>
    <button onClick={()=>dispatch(decrement())}>-</button>
    <button onClick={()=>dispatch(increment())}>+</button>
    </>
  )
}

export default App
