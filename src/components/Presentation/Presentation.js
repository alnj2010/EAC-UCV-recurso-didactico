//Dependencias
import React from 'react'
//Assets
import './Presentation.css'

function Presentation(props){
    
    const {title, children} = props;
    return (
        <header className="presentation">
           <h1>{title}</h1>
            <p>{children}</p>
        </header>
    );
}
export default Presentation;