import {toUpperFirst} from '../helpers/helpersfunctions'

 function getCities() {
    const list = JSON.parse(localStorage.getItem('list'));
    
    if (list === null) return [];

    const cityList = list.cities.map(name => {
        return {
            name: toUpperFirst(name),
            weather: {}
        };
    });
    
    return cityList;
}


const initialState = {
    cities: getCities(),
    localWeather: [],
    showModal: false,
    modalText: ''
};

export default initialState;