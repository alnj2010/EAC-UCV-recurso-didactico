//Dependencias
import React from 'react'
//Assets
import './Navbar.css'
import backicon from '../global/images/back.svg'

function Navbar(props){
    const {logo, children} = props;
    var back=window.location.pathname==='/'?'':<div onClick={()=>{window.history.back();}}> <img src={backicon} alt=""/> </div>;
    return (
        <nav>
            
            <div className="logo">
                {back}
                <img src={logo} alt="logo"/> 
            </div>
            <ul className="menu">
                {children.map((item,index)=> ( <li key={index.toString()}> {item} </li>))}
            </ul>
        </nav>
    );
}
export default Navbar;