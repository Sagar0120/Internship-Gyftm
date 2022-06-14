import './Navbar.style.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className= "nav">
            <h1>ReactMeals</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Login.js">Login</Link></li>
                <li><Link to="/Register.js">Register</Link></li>
            </ul>
        </header>
    );
};

export default Navbar;