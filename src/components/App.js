//Dependencias
import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom' 
//Assets
import './global/css/App.css';
import logo from './global/images/logo-ciencias.png'
//Components
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'

class App extends Component {
  
  render() {
    return (
      <main className="App">
        
        <Navbar logo={logo}>
          <Link to="/">INICIO</Link>
          <Link to="/acercade/">ACERCA DE</Link>
        </Navbar>
        
          <Switch>
            <Route exact path="/" component={Home}/>
            {/* <Route path="/acercade/" component={} />
            <Route path="/blockchain/" component={} />
            <Route path="/dispositivos-autonomos/" component={} />
            <Route path="/analitica-aumentada/" component={} />
            <Route path="/inteligencia-artificial/" component={} />
            <Route path="/gemelos-digitales/" component={} />
            <Route path="computacion-cuantica" /> */}
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
