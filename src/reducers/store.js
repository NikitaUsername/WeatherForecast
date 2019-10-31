import initialState from "./initialState";


function store(state = initialState, action){
    switch(action.type){
        case 'ADD_CITY':{
            const cities = [...state.cities];
            cities.push(action.name);
            return{
                ...state,
                cities
            };
        }

        case 'DELETE_CITY':{
            const cities = [...state.cities];
            cities.splice(action.index, 1);
            return{
                ...state,
                cities
            };
        }
        default: return state;
    }
};
export default store;