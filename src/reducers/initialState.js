
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

function getUser() {
    const token = sessionStorage.getItem('authToken');
    return token;
}


const initialState = {
    cities: getCities(),
    user: getUser()
};

export default initialState;