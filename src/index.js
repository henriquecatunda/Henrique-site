import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Switch, Route } from  'react-router-dom';
import App from './Home/App';
import Portfolio from './Portfolio';

const Pagina404 =() => (<div> Pagina 404 </div>)
ReactDOM.render(

  <BrowserRouter>
    <Switch>           
      <Route path="/" component={App} exact/>
      <Route path="/portfolio" component={Portfolio} exact/>        
      <Route component={Pagina404}/> 
    </Switch>
</BrowserRouter>,

  document.getElementById('root')
);

