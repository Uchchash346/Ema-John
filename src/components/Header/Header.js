import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>This is Header</h2>
            <img src={logo} alt="" />
        </div>
    );
};

export default Header;