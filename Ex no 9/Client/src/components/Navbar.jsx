import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => (
    <nav className="navbar">
        <ul className="nav-links">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/login" className="nav-link">Login</Link></li>
            <li><Link to="/signup" className="nav-link">Signup</Link></li>
        </ul>
    </nav>
);

export default Navbar;