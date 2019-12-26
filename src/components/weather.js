import React from "react";
import { ClipLoader } from 'react-spinners';
import { connect } from 'react-redux';
import WeatherData from "./WeatherData"

class Weather extends React.Component {


    render() {
        if (this.props.weatherInfo.weather) {
            var pic = "http://openweathermap.org/img/wn/" + this.props.weatherInfo.weather[0].icon + "@2x.png"
            return (

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 id="cityname">
                                {this.props.weatherInfo.name}
                            </h2>
                            <div className="row">
                                <img id="pic" src={pic}></img>
                                <p id="temp"> {this.props.weatherInfo.main.temp} ºC </p>
                            </div>

                        </div>
                        
                            <WeatherData weatherData={this.props.weatherInfo}/>
                        
                    </div>
                </div>

            );
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 id="waiting">
                                Подождите, данные загружаются
                        </h2>
                        </div>
                        <div className="col-lg-12 ">
                            <div className="center-block">
                                <ClipLoader color='#d3d3d3' />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

    }
}
const mapStateToProps = (state) => {
    return {
        weatherInfo: state.localWeather
    }
}

export default connect(mapStateToProps)(Weather)