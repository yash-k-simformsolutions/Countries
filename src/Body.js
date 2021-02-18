import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Body.css';

class Body extends Component{
    render(){
        return(
            <div className="body">
                {
                    this.props.data.map((country, index) => (
                        <Link to={`/${country.name}`} onClick={() => {this.props.handleCountry(country.name)}}>
                            <div className="body_Card" key={index}>
                                <img src={country?.flag} alt={country?.name} />
                                <div className="body_CardInfo">
                                    <h3>{country?.name}</h3>
                                    <h5>{country?.capital}</h5>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        )
    }
}

export default Body;