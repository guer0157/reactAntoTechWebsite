import React, {Component} from 'react';
import {Link as RRNavLink} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import '../css/nav.css'

export default class Navigation extends Component {

    render(){
    return (
        <Navbar>
        <Nav className={`${this.props.forNav} nav-menu`} navbar>
          <NavItem><NavLink className="nav-item" tag={RRNavLink} to="/">Inicio</NavLink></NavItem>
          <NavItem><NavLink className="nav-item" tag={RRNavLink} to="/productos">Productos</NavLink></NavItem>
          <NavItem><NavLink className="nav-item" tag={RRNavLink} to="/servicios">Servicios</NavLink></NavItem>
          <NavItem><NavLink className="nav-item" tag={RRNavLink} to="/noticiasEventos">Noticias/Eventos</NavLink></NavItem>
          <NavItem><NavLink className="nav-item" tag={RRNavLink} to="/contacto">Contacto</NavLink></NavItem>
          <NavItem><NavLink className="nav-item" tag={RRNavLink} to="/sobreAntoTech">Sobre AntoTech</NavLink></NavItem>
          <NavItem className="cart"><NavLink className="nav-item cartLink" tag={RRNavLink} to="/carrito">Carrito</NavLink></NavItem>
      </Nav>
      </Navbar>
    )
    }
}
