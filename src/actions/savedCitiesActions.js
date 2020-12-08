import { findWeatherByName, deleteFromStorage } from '../helpers/helpersfunctions'
import { addToStorage } from '../helpers/helpersfunctions'

export function addCity(cityName, currentState) {
    return async function (dispatch) {
        if (!cityName) {
            alert('Please enter the city');
        } else {
            cityName = cityName[0].toUpperCase() + cityName.toLowerCase().slice(1);
            if (currentState.findIndex(city => city.name === cityName) === -1) {
                findWeatherByName(cityName)
                    .then(function (data) {
                        if (data.clouds) {
                            dispatch({ type: 'ADD_CITY', name: cityName });
                            addToStorage(cityName);
                        } else {
                            alert("City Not Found");
                        }
                    })
            }
            else {
                alert('This city is already added');
            }
        }
    }
}

export function deleteCity(cityName) {
    return async function (dispatch) {
        dispatch({ type: 'DELETE_CITY', name: cityName });
        deleteFromStorage(cityName);
    }
}

export function addWeather(cityName) {
    return async function (dispatch) {
        findWeatherByName(cityName)
            .then(function (data) {
                dispatch({ type: 'ADD_WEATHER', name: cityName, weather: data });
                console.log(data);
            })
    }
}