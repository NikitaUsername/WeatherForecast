import React from "react";
import { ClipLoader } from 'react-spinners';
import { connect } from 'react-redux';

class WeatherData extends React.Component {


    render() {
        return (
            <div className="col-lg-6">
                <div className='row' id="string">
                    <p>Погода</p>
                    <div className='val'> {this.props.weatherData.weather[0].description} </div>
                </div>
                <div className='row' id="string">
                    <p>Давление</p>
                    <div className='val'  > {this.props.weatherData.main.pressure} hPA</div>
                </div>
                <div className='row' id="string">
                    <p>Скорость ветра</p>
                    <div className='val'  > {this.props.weatherData.wind.speed} m/s</div>
                </div>
                <div className='row' id="string">
                    <p>Облачность</p>
                    <div className='val'  > {this.props.weatherData.clouds.all} %</div>
                </div>
            </div>
        );
    }

}

export default (WeatherData)