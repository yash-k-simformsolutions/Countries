import React, { Component } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

class Header extends Component{
    state = {
        show: false,
    }

    componentDidMount(){
        this.showHeader();
        console.log(this.state.show)
    }

    showHeader = () => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 50){
                this.setState({
                    show: true,
                })
            }
            else{
                this.setState({
                    show: false,
                })
            }
        })

        return () => {
            window.removeEventListener("scroll")
        }
    }

    render(){
        return(
            <div className={`header ${this.state.show && "header_Row"}`}>
                <Link to="/" className="header_Title">
                    <h2>Find Your Land</h2>
                </Link>
                <div className="header_subHeader">
                    <div className="header_Search">
                        <input type="text" name="country" placeholder="Search for your land..." onChange={this.props.handleChange} />
                        <SearchIcon />
                    </div>
                </div>                
            </div>
        )
    }
}

export default Header