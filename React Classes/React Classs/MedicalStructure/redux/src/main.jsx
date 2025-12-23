//we need to configure the Redux store and provide it to our React application by using the Provider component from react-redux
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//we use provider to make the Redux store available to our React components
//we put it inside an object because we might have multiple exports from react-redux
import {Provider} from "react-redux";

import {store} from "./app/Store.jsx";

createRoot(document.getElementById('root')).render(

  //is a binder component that allows React components to interact with the Redux store
  //we do this because we want our entire application to have access to the Redux store
  <Provider store={store}>

    {/* //the store is passed as a prop to the provider component because it needs to know which Redux store to provide to the React components */}
    <App />
  </Provider>,
)
//slides is a manipulator that allows us to create and manage a root for rendering our React application which manipulate the state of the DOM
