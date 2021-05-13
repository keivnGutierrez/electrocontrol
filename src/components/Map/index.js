import React, { Component } from 'react'; //basicos
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'; //de google

export class Mapa extends Component {

    render() {
        return (

            <Map
                style={{ width: '80%', height: '70%', margin: 'auto', background: 'red' }}
                initialCenter={{ lat: 19.039148, lng: -98.1947685 }}
                zoom={17}
                google={this.props.google}
            >
                {/* 19.039148,-98.1947685,20z */}
                <Marker position={{ lat: 19.039148, lng: -98.1947685 }} />
            </Map>
            // apiKey="AIzaSyAkWWY8lHxuPb8jjLubgh-mjczZjFjBgZM"
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAkWWY8lHxuPb8jjLubgh-mjczZjFjBgZM'
})(Mapa);