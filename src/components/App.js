//Dependencias
import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom' 
//Assets
import './global/css/App.css';
import logo from './global/images/logo-ciencias.png'
//Components
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Blockchain from './Blockchain/Blockchain'
import Iartificial from './Iartificial/Iartificial'
import Dispositivos from './Dispositivos/Dispositivos'
import Cuantica from './Cuantica/Cuantica'
import Gemelos from './Gemelos/Gemelos'
import Experiencia from './Experiencia/Experiencia'

class App extends Component {
  
  render() {
    return (
      <main className="App">
        
        <Navbar logo={logo}>
          <Link to="/" Class="active">INICIO</Link>
          <a href="https://es.educaplay.com/es/recursoseducativos/4278070/html5/relaciona_las_imagenes.htm">JUEGO</a>
        </Navbar>
        
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/blockchain/" component={Blockchain} />
            <Route path="/inteligencia-artificial/" component={Iartificial} />
            <Route path="/dispositivos-autonomos/" component={Dispositivos} />
            <Route path="/computacion-cuantica/" component={Cuantica} />
            <Route path="/gemelos-digitales/" component={Gemelos} />
            <Route path="/experiencia/" component={Experiencia}/> 
            {/*<Route path="/acercade/" component={} />*/}
            <Route render={()=>( <h1>Pagina no encontrada</h1> )} />
          </Switch>
        
        <footer className="footer">
            @ 2019. Universidad Central de Venezuela (UCV)
        </footer>

      </main>
    );
  }
}

export default App;
