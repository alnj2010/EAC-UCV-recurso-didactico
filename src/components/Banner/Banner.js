//Dependencias
import React from 'react'
//Assets
import './Banner.css'

function Banner(props){
    
    const {title,image} = props;
    
    const imageBanner = {
        backgroundImage: 'url(' + image + ')',
      };

    return (
        <header className="banner" style={imageBanner}>
        <h1 dangerouslySetInnerHTML={{__html:title}} />
        </header>
    );
}
export default Banner;