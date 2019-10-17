import React, { Component } from "react";
import Navigation from "../Navigation";
import "./footer.module.css";

export default class Footer extends Component {
  handleTextChange = ev => {
    this.setState({
      message: ev.target.value
    });
  };
  render() {
    return (
      <div className="footer-container">
        <Navigation forNav="footerNav" className="footer-nav" />
        <div>
          <textarea onChange={this.handleTextChange} />
          {this.state && this.state.message && (
            <a
              href={`whatsapp://send?text=${this.state.message}!&phone=+14389790112&abid=+14389790112`}
            >
              Enviar
            </a>
          )}
          {(!this.state || this.state.message === "") && <p>Enviar</p>}
        </div>
        <div>
          <h2>Telefonos</h2>
          <a href="https://wa.me/0115215550216971?text=Hola, estoy interesado en sus productos.">
            (55)5441-5406
          </a>
        </div>
      </div>
    );
  }
}
