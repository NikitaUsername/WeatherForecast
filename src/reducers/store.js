import initialState from "./initialState";
import { bindActionCreators } from "redux";


function store(state = initialState, action){
    switch(action.type){
        case 'ADD_CITY':{
            const cities = [...state.cities];
            const newCity = {
                name: action.name,
                weather: []
            }
            cities.push(newCity);
            return{
                ...state,
                cities
            };
        }

        case 'DELETE_CITY':{
            const cities = [...state.cities];
            const index = cities.findIndex(city => city.name === action.name);
            cities.splice(index, 1);
            return{
                ...state,
                cities
            };
        }
        
        case 'ADD_WEATHER':{
            const cities = [...state.cities];
            const index = cities.findIndex(city => city.name === action.name);
            cities[index] = {
                ...cities[index],
                weather: action.weather
            };
            return{
                ...state,
                cities
            };
        }


        case 'ADD_LOCAL_WEATHER':{
            return{
                ...state,
                localWeather: action.weather
            };
        }

        case 'SHOW_HIDE_MODAL': {
            return{
                ...state,
                showModal: action.turn,
                modalText: action.payload
            };
        }

        default: return state = initialState;
    }
};
export default store;