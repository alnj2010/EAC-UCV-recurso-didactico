//Dependencias
import React from 'react'
//Assets
import './Topics.css'


function Topics(props){
    
    const {children} = props;
    return (
        <section className="topics">
            {children}
        </section>
    );
}
export default Topics;