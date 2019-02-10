import React from 'react';
import '../../css/home.css';

export default function Header(props){
    return(
        <div className="header home">
            <div className="header-inner">
                <div className="header-container">
                    <div className="header-logo">
                        <img alt="Antotech Logo" src={require("../../img/antobot-logo-main.svg")}/>
                        
                    </div>
                    <div className="header-line">  
                        <h1>Calidad &#10061; Garantia &#10061; Profesionalismo</h1>
                        <a id="llamanos" href="tel:+1-613-608-0112">Llamanos</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
