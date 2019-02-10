import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import '../../css/home.css';

const InfoWindow = (({ evInfo:text }) => (
    <h1 className="infoWindow">{ text }</h1>
))

export default class Map extends Component{
    static defaultProps = {
        center: { lat: 19.8392, lng: -98.9849 },
        zoom:6
      }
     
render(){
    console.log(this.props.events)
    return(
            <div style={{width:'50vw'}}>
            <div className="map" style={{ height: '100%', width: '100%'}}>
            <GoogleMapReact  bootstrapURLKeys={{key:"AIzaSyCB0XrP5yEP0ZOAyvw4OXHXdWCGiDD9sug"}} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
            {
            this.props.events.events.map(event=>(
                <InfoWindow 
                key={event.id}
                lat={ event.direccion.lat }
                lng={ event.direccion.lon }
                evInfo={ event.title }/>
            ))

            }
            </GoogleMapReact>
            </div>
            </div>
    )
    }
}