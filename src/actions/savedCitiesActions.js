import { findWeatherByName, deleteFromStorage } from '../helpers/helpersfunctions'
import { addToStorage } from '../helpers/helpersfunctions'
import { toUpperFirst } from '../helpers/helpersfunctions'

export function addCity(cityName, currentState) {
    console.log(cityName);
    cityName = toUpperFirst(cityName);
    return async function (dispatch) {
        if (!cityName) {
            dispatch({ type: 'SHOW_HIDE_MODAL', payload: 'Please enter the city', turn: 'true' });
            return;
        } else {
            if (currentState.findIndex(city => city.name === cityName) === -1) {
                findWeatherByName(cityName)
                    .then(function (data) {
                        if (data.clouds) {
                            dispatch({ type: 'ADD_CITY', name: cityName });
                            addToStorage(cityName);
                        } else {
                            dispatch({ type: 'SHOW_HIDE_MODAL', payload: 'City not found', turn: 'true' });
                            return;
                        }
                    })
            }
            else {
                dispatch({ type: 'SHOW_HIDE_MODAL', payload: 'This city is already added', turn: 'true' });
                return;
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

export function handleModal() {
    return async function (dispatch) {
        dispatch({ type: 'SHOW_HIDE_MODAL', payload: '', turn: false });
    }
}