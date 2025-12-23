//create a slice of the Redux store for managing counter state
//counter state will hold a numeric value that can be incremented
//slide can be use in a cart to keep track of the number of items in the cart

import {createSlice} from '@reduxjs/toolkit';

//i want do it that when you click on a button it increments a counter value in the Redux store

//counterSlice is an object that contains the reducer(reducer is a function that specifies how the state changes in response to actions) functions and initial state for the counter slice
export const counterSlice = createSlice({
    name: 'counter', //name of the slice
    initialState: {value: 0}, //initial state of the counter slice because we want to start counting from 0
    //we do this by defining a reducer function that handles the increment action
    reducers:{
        //define the increment reducer function and it takes the current state as an argument
        //manipulate the state directly because Redux Toolkit uses Immer library under the hood to handle immutability
        //Immer liberary allows us to write code that appears to mutate the state directly but actually produces a new immutable state behind the scenes
        //java script is build on multithreading so we can have multiple processes running at the same time
        increment: (state) =>{
            state.value+=1
        },
        //define the decriment reducer function to decrease the counter value by 1
        //it also takes the current state as an argument
        decrement: (state) =>{
            state.value-=1}
    }
});

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer