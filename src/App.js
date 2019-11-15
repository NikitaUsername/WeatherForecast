import React from "react";
import Header from "./components/header"
import Weather from "./components/weather"
import Saved from "./components/saved"
import SavedHeader from "./components/savedHeader"


class App extends React.Component {
  state = {
    info: undefined,
    byNameInfo: undefined
  }

  errorCallback = () => {
    var positionanalog = {
      coords: {
        latitude: 59.93,
        longitude: 30.31
      }
    }
    this.findWeather(positionanalog);
    
  }
  
  findWeather = async (position) => {
    console.log(position);
    const api_url = await
      fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=1db91134dffc102e728e7a3d0ad5eb23`);
      
      const data = await api_url.json();
    console.log(data);
    this.setState({
      info: data
    });
  }

  gettingWeather = () => {
    this.setState({
      info: undefined
    });

    navigator.geolocation.getCurrentPosition(this.findWeather, this.errorCallback);
  }

  

  addToStorage = (name) => {
    const list = localStorage.getItem('list');
    if (list === null) {
      let cities = {
        cities: [name]
      }
      localStorage.setItem('list', JSON.stringify(cities))

    }
    else {
      const jsonlist = JSON.parse(list);
      const add = jsonlist.cities.push(name);
      const newlist = jsonlist;
      localStorage.setItem('list', JSON.stringify(newlist))
    }
  }



  render() {
    return (
      <div>
        <Header weatherMethod={this.gettingWeather} />
        <Weather weatherInfo={this.state.info} />
        <SavedHeader />
      </div>
    );
  }
}

export default App;