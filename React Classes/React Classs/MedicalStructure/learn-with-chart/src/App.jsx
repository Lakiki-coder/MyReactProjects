import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Register from "./page/Register";
import Products from "./page/Product";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default App;
