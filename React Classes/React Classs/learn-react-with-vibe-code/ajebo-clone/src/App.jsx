import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

function App() {
  const handleSearch = (term) => {
    // Search handling is managed within Home and other pages
    console.log('Searching for:', term);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail onSearch={handleSearch} />} />
        <Route path="/cart" element={<Cart onSearch={handleSearch} />} />
      </Routes>
    </Router>
  );
}

export default App;

