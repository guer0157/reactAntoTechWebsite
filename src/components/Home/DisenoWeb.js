import React from 'react';
import './diseWeb.css';


export default function disenoWeb(props) {
  return (
    <div className="diseno-web-section">
      <div className="title-container">
        <h2>Diseno y Desarrollo Web</h2>
      </div>
      <div className="card-section">
        <div className="card-container">
          <h3>Logo</h3>
          <p>Paquetes con todo incluido</p>
          <img alt="" src={require("../../img/webdev2.jpg")} />
          <p>Diseñamos toda tu pagina web desde cero. Incluye: Diseno de logotipo.Diseno de pagina web Desarrollo de pagina web Dominio web **www.tucerrajeria.com Mantenimiento
          </p>
        </div>
        <div className="card-container">
          <h3>Diseno</h3>
          <p>Te decimos que equipo se acomoda mejor a tus necesitades</p>
          <img alt="" src={require('../../img/webDev.jpg')} />
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure in </p></div>
        <div className="card-container">
          <h3>Desarrollo</h3>
          <p>Te ayudamos a desarrollar tu idea</p>
          <img alt="" src={require('../../img/devDesign.jpg')} />
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure in </p>
        </div>
      </div>
    </div>
  )
}