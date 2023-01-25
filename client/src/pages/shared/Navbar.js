import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <div className='navbar' >
           <div className="container">
          <div className="links">
            <Link to ='/'>Home</Link>
            <Link to ='/users'>Users</Link>
           
          </div>
           </div>
        </div>
    );
};

export default Navbar;