
 function getCities() {
    const list = JSON.parse(localStorage.getItem('list'));
    
    if (list === null) return [];

    const cityList = list.cities.map(name => {
        return {
            name: name,
            weather: {}
        };
    });
    
    return cityList;
}


const initialState = {
    cities: getCities()
};

export default initialState;