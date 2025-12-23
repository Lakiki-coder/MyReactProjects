
//import Register from './auth/register/Register.jsx'
import router from './router/router'
import { RouterProvider } from 'react-router';
// RouterProvider is a component that takes a router object as a prop and makes it available to the rest of the app.

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    {/* //props is used to pass data from parent to child components in React.which is being done here by passing the router object to the RouterProvider component.
     // RouterProvider uses React's Context API to make the router available to all components within the app, allowing them to access routing information and perform navigation actions.
    // This setup is essential for enabling client-side routing in a React application.
    // to avoid comment one component for another we use RouterProvider which can hold multiple components and render them based on the route. */}
    </>
  )
}

export default App
