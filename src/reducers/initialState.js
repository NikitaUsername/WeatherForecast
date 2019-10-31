const localState = () => JSON.parse(localStorage.getItem('state'));

const initialState ={
    cities: JSON.parse(localStorage.getItem('list')).cities
    };

export default initialState;