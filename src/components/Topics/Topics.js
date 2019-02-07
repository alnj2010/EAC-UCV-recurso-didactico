//Dependencias
import React from 'react'
//Assets
import './Topics.css'


function Topics(props){
    
    const {children} = props;
    return (
        <div className="topics">
            <h1>Nuevos perfiles que demanda el mercado digital.</h1>              
        <section>    
            {children}
        </section>
        </div>
    );
}
export default Topics;