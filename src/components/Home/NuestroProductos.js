import React, {Component} from 'react';
import './nuestos.css';

export default class Nuestros extends Component{
    render(){
    return (
     <div className="nuestros-section">
         <div className="nuestros-bg-img">
         <div className="product-img-container">
            <img id="t-300-np" alt="t-300-np" style={{width:'40%'}} src={require("../../img/t-300-main-8.png")} />
            <img id="figo-np" alt="figo-np" style={{width:'40%'}} src={require("../../img/figo-main-8.png")} />
            <img id="punch-a-matic-np" style={{width:'40%'}} alt="punch-a-matic-np" src={require("../../img/punch-main-8.png")} />
            <img id="ck-100-np" alt="ck-100-np" style={{width:'40%'}} src={require("../../img/ck100-main-8.png")} />
            <img id="ikey-np" alt="ikey-np" style={{width:'40%'}} src={require("../../img/ikey820-main-8.png")} />
            <img id="multicode-np" alt="multicode" style={{width:'40%'}} src={require("../../img/multicode-main-8.png")} />
         </div>
         <div className="product-text-section">
            <div className="product-text-container">
                <h2>Nuestros Productos</h2>
                <h3>Productos en los que puedes confiar - con la mejor garantia del mercado!</h3>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
         </div>
         </div>
     </div>
    )}
}