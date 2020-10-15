import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import CartPage from './components/CartPage';
import Servicios from './components/Servicios';
import NoticiasEventos from './components/NoticiasEventos';
import Contacto from './components/Contacto';
import About from './components/About';
import ProductosPage from './components/ProductosPage';

const Router=()=>{
 return (
<Switch>
  <Route path="/" component={Home}/>
  <Route exact path="/productos" component={ProductosPage}/>
  <Route exact path="/carrito" component={CartPage}/>
  <Route exact path="/servicios" component={Servicios}/>
  <Route exact path="/noticiasEventos" component={NoticiasEventos}/>
  <Route exact path="/contacto" component={Contacto}/>
  <Route exact path="/sobreAntoTech" component={About}/>
</Switch>
    )
}
export default Router