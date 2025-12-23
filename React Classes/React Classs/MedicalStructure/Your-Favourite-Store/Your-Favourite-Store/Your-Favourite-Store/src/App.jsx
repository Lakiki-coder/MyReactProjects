// we import the components which we want to use as pages in our app
// we import BrowserRouter, Routes, and Route from react-router-dom to set up routing in our application
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// we import the Home component which will be the landing page
import Home from './router/Home';
import ProductDetails from './router/ProductDetails';
import Cart from './router/Cart';

// we define the main App component which sets up the routing for our application
function App() {

  // we use BrowserRouter to enable routing in our application
  return (
    <BrowserRouter>
      <Routes>
        {/* // we define the routes for our application to be rendered based on the URL path */}
        <Route path="/" element={<Home />} />

        {/* // we use a dynamic segment :id to capture the product ID from the URL means that this part of the URL can be any value and it will be accessible via the useParams hook in the ProductDetails component */}
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* // we define the route for the cart page */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;