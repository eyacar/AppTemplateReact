import React from 'react';
import logo from './logo.svg';
import './App.scss';


const Header = () => (
    <header id='header'>
    <img src={logo} alt="logo"/>
    <div id='titulo'>
    <h1>Winery</h1> 
    <h1>Disfuta el momento!</h1>
    </div>
    </header>
) 

export default Header;
