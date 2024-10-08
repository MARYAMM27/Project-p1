import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/SideMenu.css'; // Importing the Side Menu CSS

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={collapsed ? 'side-menu collapsed' : 'side-menu'}>
      <button className="collapse-button" type="button" onClick={toggleMenu}>
        {collapsed ? '☰' : '✖'}
      </button>
      <nav>
        <ul>
          <li>
            <Link to="/home">
              <span className="icon">🏠</span>
              <span className={collapsed ? 'collapsed-text' : 'text'}>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <span className="icon">ℹ️</span>
              <span className={collapsed ? 'collapsed-text' : 'text'}>About</span>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <span className="icon">📞</span>
              <span className={collapsed ? 'collapsed-text' : 'text'}>Contact</span>
            </Link>
          </li>
          <li>
            <Link to="/feedback">
              <span className="icon">💬</span>
              <span className={collapsed ? 'collapsed-text' : 'text'}>Feedback</span>
            </Link>
          </li>
          <li>
            <Link to="/todolist">
              {' '}
              {/* Link to To-Do List */}
              <span className="icon">📝</span>
              <span className={collapsed ? 'collapsed-text' : 'text'}>To-Do List</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;
