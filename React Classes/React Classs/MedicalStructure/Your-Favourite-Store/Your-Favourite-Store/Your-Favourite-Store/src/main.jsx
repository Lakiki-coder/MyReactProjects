// we import React from 'react' because we are using JSX syntax in this file
import React from 'react';

// we import ReactDOM to render our React application into the DOM
import ReactDOM from 'react-dom/client';

// we import Provider from react-redux to make the Redux store available to our React components
import { Provider } from 'react-redux';

// we import the main App component of our application
import App from './App.jsx';

// we import the Redux store that we have configured
import { store } from './app/store.jsx';

// we import the main CSS file for styling
import './index.css';

// we create a root element and render our React application wrapped with the Provider component to make the store available throughout the app
ReactDOM.createRoot(document.getElementById('root')).render(

  // Provider makes the Redux store available to any nested components that need to access the Redux store
  <Provider store={store}>

    {/* // App is the root component of our React application */}
    <App />
  </Provider>
);


