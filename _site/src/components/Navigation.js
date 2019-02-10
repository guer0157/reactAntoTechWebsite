import React, {Component} from 'react';
import {NavLink as RRNavLink} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import '../css/nav.css'

export default class Navigation extends Component {
    reLoadPage=()=>{
        this.props.history.replace("/")
    }
    render(){
    return (
        <Navbar>
        <Nav className="nav-menu" navbar>
          <NavItem><NavLink className="nav-item" tag={RRNavLink} to="/" onClick={this.reLoadPage}>Inicio</NavLink></NavItem>
          <NavItem><NavLink className="nav-item" tag={RRNavLink} to="/productos" onClick={this.reLoadPage}>Productos</NavLink></NavItem>
          <NavItem><NavLink className="nav-item" tag={RRNavLink} to="/servicios" onClick={this.reLoadPage}>Servicios</NavLink></NavItem>
          <NavItem><NavLink className="nav-item" tag={RRNavLink} to="/noticiasEventos" onClick={this.reLoadPage}>Noticias/Eventos</NavLink></NavItem>
          <NavItem><NavLink className="nav-item" tag={RRNavLink} to="/contacto" onClick={this.reLoadPage}>Contacto</NavLink></NavItem>
          <NavItem><NavLink className="nav-item" tag={RRNavLink} to="/sobreAntoTech" onClick={this.reLoadPage}>Sobre AntoTech</NavLink></NavItem>
          <NavItem className="cart"><NavLink className="nav-item cartLink" tag={RRNavLink} to="/carrito" onClick={this.reLoadPage}>Carrito</NavLink></NavItem>
      </Nav>
      </Navbar>
    )
    }
}
