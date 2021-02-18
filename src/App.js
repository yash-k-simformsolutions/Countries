import { Component } from 'react';
import './App.css';
import Body from './Body';
import Header from './Header';
import Map from './Map';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    data: [],
    country: '',
    countryName: '',
  }

  componentDidMount(){
    this.countryData();
  }

  countryData = async () => {
    const url = 'https://restcountries.eu/rest/v2/all';
    try{
      const response = await axios.get(url);
      const responseData = await response.data;
      this.setState({
        data: responseData,
      })

      console.log(responseData);
    } catch(error){
      console.log(error);
    }
  }

  handleChange = (e) => (
    this.setState({
      country: e.target.value,
    })
  )

  handleCountry = (name) => (
    this.setState({
      countryName: name,
    })
  )
    
  render(){
    console.log(this.state.countryName)

    let mapCountry = this.state.data.filter((country) => {
      return country.name === this.state.countryName
    })
    
    let selectedCountry = this.state.data.filter((country) => {
      return country.name.toLowerCase().includes(this.state.country.toLowerCase())
    })

    console.log(mapCountry[0])

    return (
        <Router>
          <div className="app">
            <Switch>
              <Route exact path="/">
                <Header handleChange={ this.handleChange } />
                <Body data={ selectedCountry } handleCountry={ this.handleCountry } />
              </Route>

              <Route to='/map'>
                <Map mapData={ mapCountry[0] }  />
              </Route>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;