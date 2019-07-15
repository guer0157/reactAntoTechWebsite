import React, {Component} from 'react';
import Navigation from '../Navigation';
import './footer.module.css';

  

export default class Footer extends Component {
  handleTextChange=(ev)=>{
    this.setState({
      message:ev.target.value
    })
  }
  render(){
    return (
     <div className="footer-container">
       <Navigation  forNav="footerNav" className="footer-nav"/>
       {this.state && this.state.message &&
       <a href={`whatsapp://send?text=${this.state.message}!&phone=+14389790112&abid=+14389790112`}>Enviar</a>
       }
       {(!this.state || this.state.message === '') &&
       <p>Enviar</p>
       }
       <textarea onChange={this.handleTextChange}/>
     </div>
    )
  }
}