import React from "react";
import Header from "./components/header"
import Weather from "./components/weather"
//import Saved from "./components/saved"
import SavedHeader from "./components/savedHeader"
//import Cities from "./reducers/store"
//import {createStore} from "redux";
//import savedHeader from "./components/savedHeader";

//var store = createStore(Cities);
class App extends React.Component{
  state = {
    info: undefined,
    byNameInfo: undefined
  }
  
  errorCallback =() =>
  { 
    var positionanalog = { 
      coords: {
        latitude: 59.93,
        longitude: 30.31
      }
    }

    //store.dispatch({
     // type: 'ADD_CITY',
    //  name: 'London'
    //});
   
    //console.log(store.getState());

    this.findWeather(positionanalog);
  }
  findWeather = async (position) => {
    const api_url = await
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=1db91134dffc102e728e7a3d0ad5eb23`);
    const data = await api_url.json();
    //console.log(data);
    this.setState({
      info: data
    });
  }

  gettingWeather = () =>{
    this.setState({
      info: undefined
    });
    
   navigator.geolocation.getCurrentPosition(this.findWeather, this.errorCallback);
  }

  findWeatherByName = async (name) =>{
    const api_url = await
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}`);
    const data = await api_url.json();
    console.log(data);
    this.setState({
    byNameInfo: data
    });
  }

  
    


  render(){
    return(
      <div>
        <Header weatherMethod={this.gettingWeather} />
        <Weather weatherInfo={this.state.info}/>
        <SavedHeader />
      </div> 
    );
  }
}

export default App;