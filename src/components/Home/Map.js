import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import '../../css/home.css';

const InfoWindow = (({ evInfo:text }) => (
    <div className="infoWindow"><img alt="antobot" src={require('../../img/antobot-logo-main.svg')}/>{ text }</div>
))

export default class Map extends Component{
    constructor(props){
        super(props)
        this.state={
            center: { lat: 19.8392, lng: -98.9849 },
            zoom:5
        }
    }
render(){
    console.log("the props in lat",this.props.clicked.coords.lat, "lng",this.props.clicked.coords.lon)
    return(
        <div className="map" style={{ height: '70%', width: '40vw'}}>
            <GoogleMapReact  bootstrapURLKeys={{key:"AIzaSyCB0XrP5yEP0ZOAyvw4OXHXdWCGiDD9sug"}} 
            defaultCenter={this.state.center} defaultZoom={this.state.zoom}>
            {this.props.clicked.active &&
            this.props.events.events.map(event=>(
                <InfoWindow 
                key={event.id}
                lat={ this.props.clicked.coords.lat }
                lng={ this.props.clicked.coords.lon }
                evInfo={ this.props.clicked.ciudad }/>
            ))
            }
            </GoogleMapReact>
            </div>
    )
    }
}