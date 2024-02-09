import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/ReadyPlayerMe-Avatar.png';
import {} from 'react-router-dom';
import "../styles/Navbar.css"

const Navbar = (props) => {
    const { menuOpened, setMenuOpened } = props;
    return (
        <>
        <div className='navbar'>
            <div className='leftSide'>
                <img src={Logo} />
            </div>

            <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            </div>
        </div>

        <button
          onClick={() => setMenuOpened(!menuOpened)}
          className={`menu-button ${menuOpened ? 'open' : ''}`}
        >
          <div
            className={`bg-white h-0.5 rounded-md w-full transition-all ${
              menuOpened ? "rotate-45  translate-y-0.5" : ""
            }`}
          />
          <div
            className={`bg-white h-0.5 rounded-md w-full my-1 ${
              menuOpened ? "hidden" : ""
            }`}
          />
          <div
            className={`bg-white h-0.5 rounded-md w-full transition-all ${
              menuOpened ? "-rotate-45" : ""
            }`}
          />
        </button>
</>
    );
};

export default Navbar;
