import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header style={ headerStyle }>
        
        <h2><Link style={linkStyle} to="/">ToDo List Manager:
        </Link> - <Link style={linkStyle} to="/about">About</Link></h2>
      <h5><em>~ made with REACT.js ~</em></h5>
        </header> 
    )
}
const headerStyle = {
    background:'#333',
    color:'#fff',
    textAlign: 'center',
    padding: '10px'
}
const linkStyle = {
    fontSize:'30px',
    color:'#fff',
    textDecoration: 'underline'
}

export default Header;