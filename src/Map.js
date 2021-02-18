import React from 'react';
import { Component } from 'react';
import './Map.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

class Map extends Component{
    render(){
        const position = [this.props.mapData?.latlng[0], this.props.mapData?.latlng[1]];
        return(
            <div className="map">
                <div id="mapId">
                    <MapContainer center={position} zoom={4} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                This is marker.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <img src={this.props.mapData?.flag} alt={this.props.mapData?.name} className="map_CountryImage" />
                <h2>{this.props.mapData?.name}</h2>
            </div>
        )
    }
}

export default Map;