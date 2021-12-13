import React from 'react';
import logo from './assets/Logo.svg';

const Header = () => {
    return (
        <header>
                <div id="logo">
                    <img src={logo} alt="Logo"/>
                </div>
                <h1>Welcome to my site</h1>
                <br />
            <h2>Please enter your details to continue</h2>
        </header>
    );
};

export default Header;