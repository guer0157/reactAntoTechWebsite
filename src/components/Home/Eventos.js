import React, { Component } from 'react';
import events from '../../data/events.json';
import Map from './Map'
import '../../css/home.css';


const CurrentCiudad = (({ ev }) => (
    
    <h2 style={{marginTop:"0"}}>Encuentrano en {ev[0].ciudad}</h2>
))
const CurrentEvent = (({ ev }) => (
    <h1>{ ev[0].titulo }</h1>
))
export default class Eventos extends Component{
    constructor(props){
    super()
    this.state={
        isClicked:{coords:{lat:0, lon:0}, ciudad:null, active:false}
    }
    }
openWindow=(ev)=>{
    let datalat=ev.target.getAttribute("datalat")
    let datalon=ev.target.getAttribute("datalon")
    let datatitulo=ev.target.getAttribute("datatitulo")
    this.setState({
        isClicked:{coords:{lat:datalat, lon:datalon}, ciudad:datatitulo, active:true}
    })
    console.log('clicked', datalat, datalon)
}
render(){
    return(
        <div className="eventosMain">
        <div className="eventosMain-inner">
        <div style={{textAlign:"center"}}>
        <CurrentCiudad 
        ev={events.events}
        />
        </div>
        
        <div className="eventoSection">
        
            <div className="eventoInfo">
            <CurrentEvent 
            ev={events.events}
        />
            {
                events.events.map((event)=>(
                    <p key={event.id} onClick={this.openWindow} 
                    datalat={event.direccion.lat} 
                    datalon={event.direccion.lon}
                    datatitulo={event.ciudad}
                    >{event.ciudad} </p>
                ))
            }
            </div>
           
            <Map events={events} clicked={this.state.isClicked}/>
        </div>
        </div>
        </div>
    )
    }
}