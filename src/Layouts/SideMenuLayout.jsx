import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import SideMenu from '../Pages/SideMenu'; // Import the SideMenu
import '../Styles/Dashboard.css'; // Import styles

const SideMenuLayout = ({ children }) => (
  <div style={{ display: 'flex' }}>
    <SideMenu />
    {' '}
    {/* Side menu stays persistent */}
    <div className="content-container">
      {children}
      {' '}
      {/* Main content area */}
    </div>
  </div>
);

// Add prop validation using PropTypes
SideMenuLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SideMenuLayout;
