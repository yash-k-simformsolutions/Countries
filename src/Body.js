import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Body.css';

class Body extends Component{
    render(){
        return(
            <div className="body">
                {
                    this.props.data.map((country, index) => (
                        <div className="body_Card" key={index}>
                            <Link to={`/${country.name}`} onClick={() => {this.props.handleCountry(country.name)}}>
                                <img src={country?.flag} alt={country?.name} />
                                <div className="body_CardInfo">
                                    <h3>{country?.name}</h3>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Body;