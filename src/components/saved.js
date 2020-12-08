import React from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { addWeather, deleteCity } from '../actions/savedCitiesActions'
import { ClipLoader } from 'react-spinners';
import * as PropTypes from 'prop-types';

class Saved extends React.Component {
    componentDidMount() {
      this.props.addWeather(this.props.cityName);
      const city = this.props.favoriteCities.find(city => city.name === this.props.cityName);
     }
    render() {
        const city = this.props.favoriteCities.find(city => city.name === this.props.cityName);
        
        if (city.weather.weather){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h2 id="cityname">
                            {city.name}
                        </h2>
                    </div>
                    <div className="col-lg-6">
                        <div className='row' id="">
                            <p>Погода</p>
                            <div id='minival'>{city.weather.weather[0].description}</div>
                        </div>
                        <div className='row' id="">
                            <p>Давление</p>
                            <div id='minival'>{city.weather.main.pressure} hPa</div>
                        </div>
                        <div className='row' id="">
                            <p>Скорость ветра</p>
                            <div id='minival'> {city.weather.wind.speed} m/s</div>
                        </div>
                        <div className='row' id="">
                            <p>Облачность</p>
                            <div id='minival'> {city.weather.clouds.all} %</div>
                        </div>
                    </div>
                    <div className="col-lg-2" >
                        <button className="close" onClick={()=> this.props.deleteCity(city.name)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }else{
        return(
            <div className="container">
                        <div className = "row">
                            <div className="col-lg-12">
                            <h2 id="waiting">
                            Подождите, данные загружаются
                            </h2>
                            </div>
                            <div className ="col-lg-12 ">
                                <div className ="center-block">
                                    <ClipLoader color='#d3d3d3'/>
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
const mapStateToProps = (state) =>{
    return {
        favoriteCities: state.cities
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Saved);