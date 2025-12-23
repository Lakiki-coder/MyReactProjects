//we are doing this because we are using Redux Toolkit to configure our Redux store
import {configureStore} from '@reduxjs/toolkit';

import counterReducer from '../features/counterSlice.jsx';

//create and export the Redux store
//we have configured the store with an empty reducer for now
//a reducer is a function that determines how the state of the application changes in response to actions sent to the localStorage store
export const store = configureStore({

    //define the reducer for the Store
    reducer:{
        counter: counterReducer
    }
});