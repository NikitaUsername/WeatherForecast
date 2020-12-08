import React from "react";
import { connect } from 'react-redux';
import { addWeather, deleteCity } from '../actions/savedCitiesActions'
import { ClipLoader } from 'react-spinners';
import "../styles/Saved.css"

class Saved extends React.Component {
    componentDidMount() {
        this.props.addWeather(this.props.cityName);
        const city = this.props.favoriteCities.find(city => city.name === this.props.cityName);
    }
    render() {
        const city = this.props.favoriteCities.find(city => city.name === this.props.cityName);

        if (city.weather.weather) {
            return (
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-4 order-lg-1 col-8 order-1">
                            <h2 className="cityName" id="cityName">
                                {city.name}
                            </h2>
                        </div>
                        <div className="savedWeather col-lg-6 order-lg-2 col-12 order-3">
                            <div className='row' id="">
                                <p className="row__title" >Погода</p>
                                <div className="row__value ml-auto mr-3">{city.weather.weather[0].description}</div>
                            </div>
                            <div className='row ' id="">
                                <p className="row__title">Давление</p>
                                <div  className="row__value ml-auto mr-3">{city.weather.main.pressure} hPa</div>
                            </div>
                            <div className='row ' id="">
                                <p className="row__title">Скорость ветра</p>
                                <div className="row__value ml-auto mr-3"> {city.weather.wind.speed} m/s</div>
                            </div>
                            <div className='row ' id="">
                                <p className="row__title">Облачность</p>
                                <div className="row__value ml-auto mr-3"> {city.weather.clouds.all} %</div>
                            </div>
                        </div>
                        <div className="col-lg-2 order-lg-2 col-2 order-2" >
                            <button className="close" onClick={() => this.props.deleteCity(city.name)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="waitingText" id="waiting">
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
const mapDispatchToProps = {
    addWeather: addWeather,
    deleteCity: deleteCity
};
const mapStateToProps = (state) => {
    return {
        favoriteCities: state.cities
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Saved);