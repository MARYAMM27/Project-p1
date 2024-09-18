import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import SideMenuLayout from './layouts/SideMenuLayout'; // Common layout for all screens
import Screen1 from './screens/Screen1'; // About
import Screen2 from './screens/Screen2'; // Contact
import Screen3 from './screens/Screen3'; // Feedback

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken');
  return isAuthenticated ? children : <Navigate to="/" />;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* All pages wrapped in the SideMenuLayout */}
        <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <SideMenuLayout>
                <Home />
              </SideMenuLayout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/about" 
          element={
            <ProtectedRoute>
              <SideMenuLayout>
                <Screen1 />
              </SideMenuLayout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <ProtectedRoute>
              <SideMenuLayout>
                <Screen2 />
              </SideMenuLayout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/feedback" 
          element={
            <ProtectedRoute>
              <SideMenuLayout>
                <Screen3 />
              </SideMenuLayout>
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
