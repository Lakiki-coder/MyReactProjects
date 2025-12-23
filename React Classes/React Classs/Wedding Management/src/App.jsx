import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import ProtectedRoute from './components/ProtectedRoute'
import { useAuth } from './hooks/useAuth'

// Pages
import Home from './pages/Home'
import Products from './pages/Products'
import WeddingDetail from './pages/WeddingDetail'
import VendorDashboard from './pages/VendorDashboard'
import GuestDashboard from './pages/GuestDashboard'
import Login from './pages/Login'
import Register from './pages/Register'

// Components
import Navbar from './components/Navbar'

const App = () => {
  const { user } = useAuth()

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wedding/:id" element={<WeddingDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route 
          path="/couple" 
          element={<ProtectedRoute allowedRoles={['couple']}><CoupleDashboard /></ProtectedRoute>} 
        />
        <Route 
          path="/vendor" 
          element={<ProtectedRoute allowedRoles={['vendor']}><VendorDashboard /></ProtectedRoute>} 
        />
        <Route 
          path="/guest" 
          element={<ProtectedRoute allowedRoles={['guest']}><GuestDashboard /></ProtectedRoute>} 
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster position="top-right" />
    </Router>
  )
}

export default App