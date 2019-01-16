import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Navigation extends Component {
    reLoadPage=()=>{
        this.props.history.replace("/")
    }
    render(){
    return (
        <nav>
        <ul>
          <li><NavLink to="/" onClick={this.reLoadPage}>Inicio</NavLink></li>
          <li><NavLink to="/productos" onClick={this.reLoadPage}>Productos</NavLink></li>
          <li><NavLink to="/carrito" onClick={this.reLoadPage}>Carrito</NavLink></li>
          <li><NavLink to="/servicios" onClick={this.reLoadPage}>Servicios</NavLink></li>
          <li><NavLink to="/noticiasEventos" onClick={this.reLoadPage}>Noticias/Eventos</NavLink></li>
          <li><NavLink to="/contacto" onClick={this.reLoadPage}>Contacto</NavLink></li>
          <li><NavLink to="/sobreAntoTech" onClick={this.reLoadPage}>Sobre AntoTech</NavLink></li>
        </ul>
      </nav>
    )
    }
}
