import React, { Component } from 'react';
import events from '../../data/events.json';
import Map from './Map'
import '../../css/home.css';

export default class Eventos extends Component{
     
render(){
    return(
        <div className="eventoSection" style={{height:"60vh"}}>
            <div className="eventoInfo">
            {
                events.events.map((event)=>(
                    <p key={event.id}>{event.title}</p>
                ))
            }
            </div>
            <Map events={events}/>
        </div>
    )
    }
}