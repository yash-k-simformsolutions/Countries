import React from 'react';
import { Component } from 'react';
import './Map.css';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { Paper } from '@material-ui/core';
// import 'leaflet/dist/leaflet.css';

class Map extends Component{
    render(){
        const position = [this.props.mapData?.latlng[0], this.props.mapData?.latlng[1]];
        const { name, nativeName, flag, capital, population, region, timezones, languages, currencies, subregion } = this.props.mapData;
        
        return(
            <div className="map">
                <div id="mapId">
                    <MapContainer center={position} zoom={4} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Circle
                            center={position} 
                            pathOptions={{ color: "#2a52be" }}
                            radius={120000}
                        >
                            <Marker position={position}>
                                <Popup>
                                    {name}
                                </Popup>
                            </Marker>
                        </Circle>
                    </MapContainer>
                </div>
                <div className="map_Info">
                    <img src={flag} alt={name} />
                    <div className="map_Details">
                        <Paper elevation={3} className="map_Paper">
                            <h1>{name}</h1>
                            <h3>{capital}</h3>
                            <hr />
                            <div className="map_CountryStats">
                                <p> <span>Native Name: </span> {nativeName} </p>
                                <p> <span>Population: </span>{population}  </p>
                                <p> <span>Region: </span> {region} </p>
                                <p> <span>Sub Region: </span> {subregion} </p>
                                <p> <span>Currency: </span> {
                                    currencies.map((currency) => {
                                        return `${currency.name},  "${currency.symbol}"`
                                    })
                                } </p>
                                <p> <span>Languages: </span> {
                                    languages.map((language) => {
                                        return `${language.name}`
                                    }).join(", ")
                                } </p>
                                <p> <span>Time Zone: </span> {timezones} </p>
                            </div>
                        </Paper>
                    </div>
                </div>
            </div>
        )
    }
}

export default Map;