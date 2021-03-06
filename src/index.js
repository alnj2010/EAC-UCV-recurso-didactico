import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './components/App';
import ScrollToTop from './ScrollToTop'

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop>
            <App/>
        </ScrollToTop>        
    </BrowserRouter>, 
    document.getElementById('root')
);
