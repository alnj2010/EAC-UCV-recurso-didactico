//Dependencias
import React from 'react'
import { Link } from 'react-router-dom'
//Assets
import './Topic.css'


function Topic(props){
    
    const {image, title, enlace} = props;
    return (        
            <div className="topic">
               <Link to={enlace}><img src={image} alt=""/></Link> 
                <header>{title}</header>
            </div>
    );
}
export default Topic;