import React, { Component } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <header className="header">
                <Link to="/map">
                    <h2>Countries</h2>
                </Link>
                <div className="header_Search">
                    <input type="text" name="country" placeholder="Search for country..." onChange={this.props.handleChange} />
                    <SearchIcon />
                </div>
            </header>
        )
    }
}

export default Header