//Dependencias
import React from 'react'
//Assets
import './Knowthat.css'
import iconKnowthat from './sabiasque.png'


function Knowthat({children, title="¿Sabías que…?"}){
    
    return (
    <section className="know-that">
        <div className="img-know-that">
            <div className="title-know-that"> <h1>{title}</h1> </div> 
            <img src={iconKnowthat} alt="Icono de sabias que"/>
        </div>
        <div className="knowledge"> 
            {children}            
        </div>    
 </section>)
}

export default Knowthat;