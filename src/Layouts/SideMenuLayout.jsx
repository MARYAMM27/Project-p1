import SideMenu from '../Pages/SideMenu'; // Import the SideMenu
import '../styles/dashboard.css'; // Import styles

const SideMenuLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <SideMenu />  {/* Side menu stays persistent */}
      <div className="content-container"> {/* Main content area */}
        {children}
      </div>
    </div>
  );
};

export default SideMenuLayout;
