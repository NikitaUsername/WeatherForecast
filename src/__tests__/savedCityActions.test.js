import { addCity, deleteCity } from '../actions/savedCitiesActions'

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const fakedata = [
    {
        name: 'Moscow',
        weather: {}
    }
];

const middlewares = [thunk];
const fakeStore = configureMockStore(middlewares);
const fakeState = {
    cities: fakedata
}

describe('savedCityActions', () => {
    test('Should add city', () => {

        const data = [{
            type: 'ADD_CITY',
            name: 'Moscow'
        }];
        const myStore = fakeStore(fakeState);
        return myStore.dispatch(addCity('Miami', fakeState.cities))
            .then(() => {
                
                const actions = myStore.getActions();
                console.log(actions);
                expect(actions).toEqual(data);
            });
    });
});

describe('savedCityActions', () => {
    test('Should add city', () => {
        const data = [{
            type: 'DELETE_CITY',
            name: 'Moscow'
        }];
        const myStore = fakeStore(fakeState);
        return myStore.dispatch(deleteCity('Moscow'))
            .then(() => {
                const actions = myStore.getActions();
                console.log(actions);
                expect(actions).toEqual(data);
            })
    })
})