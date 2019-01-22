//Dependencias
import React from 'react'
//Assets
import './Navbar.css'

function Navbar(props){
    const {logo, children} = props;

    return (
        <nav>
            <div className="logo"> <img src={logo} alt="logo"/> </div>
            <ul className="menu">
                {children.map((item,index)=> ( <li key={index.toString()}> {item} </li>))}
            </ul>
        </nav>
    );
}
export default Navbar;