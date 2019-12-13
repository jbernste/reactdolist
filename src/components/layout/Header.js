import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header style={ headerStyle }>
        
        <h1>ToDo List Manager</h1>
        <Link style={linkStyle}to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
      <h6><em>made with REACT.js</em></h6>
        </header> 
    )
}
const headerStyle = {
    background:'#333',
    color:'#fff',
    textAlign: 'center'
}
const linkStyle = {
    fontSize:'30px',
    color:'#fff',
    textDecoration: 'none'
}

export default Header;