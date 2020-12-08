import React from "react";
import { ClipLoader } from 'react-spinners';
import "../styles/Weather.css"


class Weather extends React.Component {


    render() {
        if (this.props.weatherInfo) {
            var pic = "http://openweathermap.org/img/wn/" + this.props.weatherInfo.weather[0].icon + "@2x.png"
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="mainInfo">
                                <h2 className='mainInfo__cityName'>
                                    {this.props.weatherInfo.name}
                                </h2>
                                <div className="mainWeatherInfo d-flex">
                                    <img className="mainWeatherInfo__pic" src={pic}></img>
                                    <p className="mainWeatherInfo__temp"> {Math.round(this.props.weatherInfo.main.temp)} ºC </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className='weatherElement d-flex'>
                                <p className='weatherElement__title'>Погода</p>
                                <div className="weatherElement__value"> {this.props.weatherInfo.weather[0].description} </div>
                            </div>
                            <div className='weatherElement d-flex'>
                                <p className='weatherElement__title'>Давление</p>
                                <div className="weatherElement__value"> {this.props.weatherInfo.main.pressure} hPA</div>
                            </div>
                            <div className='weatherElement d-flex'>
                                <p className='weatherElement__title'>Скорость ветра</p>
                                <div className="weatherElement__value"> {this.props.weatherInfo.wind.speed} m/s</div>
                            </div>
                            <div className='weatherElement d-flex'>
                                <p className='weatherElement__title' >Облачность</p>
                                <div className="weatherElement__value"> {this.props.weatherInfo.clouds.all} %</div>
                            </div>
                        </div>
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

export default Weather;