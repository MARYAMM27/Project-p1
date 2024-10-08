import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import SideMenuLayout from './Layouts/SideMenuLayout'; // Common layout for all screens
import Screen1 from './Screens/Screen1'; // About
import Screen2 from './Screens/Screen2'; // Contact
import Screen3 from './Screens/Screen3'; // Feedback
/* eslint-disable */
import ToDoList from './Pages/TodoList'; //

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken');
  return isAuthenticated ? children : <Navigate to="/" />;
};

// Add prop-types validation
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* All pages wrapped in the SideMenuLayout */}
      <Route
        path="/home"
        element={(
          <ProtectedRoute>
            <SideMenuLayout>
              <Home />
            </SideMenuLayout>
          </ProtectedRoute>
        )}
      />
      <Route
        path="/about"
        element={(
          <ProtectedRoute>
            <SideMenuLayout>
              <Screen1 />
            </SideMenuLayout>
          </ProtectedRoute>
        )}
      />
      <Route
        path="/contact"
        element={(
          <ProtectedRoute>
            <SideMenuLayout>
              <Screen2 />
            </SideMenuLayout>
          </ProtectedRoute>
        )}
      />
      <Route
        path="/feedback"
        element={(
          <ProtectedRoute>
            <SideMenuLayout>
              <Screen3 />
            </SideMenuLayout>
          </ProtectedRoute>
        )}
      />
      <Route
        path="/todolist" // Path for ToDoList
        element={(
          <ProtectedRoute>
            <SideMenuLayout>
              <ToDoList />
              {/* Use ToDoList component */}
            </SideMenuLayout>
          </ProtectedRoute>
        )}
      />
    </Routes>
  </Router>
);

export default AppRoutes;
