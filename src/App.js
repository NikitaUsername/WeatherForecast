import React from "react";
import Header from "./components/header"
import Weather from "./components/weather"
class App extends React.Component{
  state = {
    info: undefined
  }
  findWeather = async (position) => {
    const api_url = await
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=1db91134dffc102e728e7a3d0ad5eb23`);
    const data = await api_url.json();
    console.log(data);
    this.setState({
      info: data
    });

  }

  gettingWeather = () =>{
    this.setState({
      info: undefined
    });
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.findWeather);
      }else{
        console.log("pukpukpuk")
      }
    }

  render(){
    return(
      <div>
        <Header weatherMethod={this.gettingWeather} />
        <Weather weatherInfo={this.state.info}/>
      </div> 
    );
  }
}

export default App;