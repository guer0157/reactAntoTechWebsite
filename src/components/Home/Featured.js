import React from "react";
import "./featured.css";

export default function Featured(props) {
  return (
    <div className="feature-section">
      <div className="feature-bg-color">
        <h2>Siempre comprometidos a brindarte el mejor servicio</h2>
        <div className="feature-card-section">
          <div className="feature-card-container">
            <img alt="" src={require("../../img/t-300-8.png")} />
            <h3>Productos</h3>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure
            </p>
          </div>
          <div className="feature-card-container">
            <img alt="" src={require("../../img/cap-8.png")} />
            <h3>Asesoria</h3>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure
            </p>
          </div>
          <div className="feature-card-container">
            <img alt="" src={require("../../img/multicode-8.png")} />
            <h3>Desarrollo</h3>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
