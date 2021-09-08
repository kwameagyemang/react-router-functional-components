import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav id="nav-bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/giphy">Giphy</Link>
          </li>
        </ul>
      </nav>
  );
};

export default NavBar;

