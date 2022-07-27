import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/welcome">What is this?</Link>
                <Link to="/test">Test</Link>
            </nav>
        </div>
    );
};

export default NavBar;