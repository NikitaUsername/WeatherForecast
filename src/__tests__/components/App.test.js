import App from '../../App'
import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('App container', () => {
    test('matches the snapshot with city loader and no saved cities', () => {
        const mockGeolocation = {
            getCurrentPosition: jest.fn()
                .mockImplementation((success) => Promise.resolve(success({
                    coords: {
                        latitude: 10,
                        longitude: 10
                    }
                })))
        };
        navigator.geolocation = mockGeolocation;
        const store = mockStore({
            cities: [
            ]
        });
        const tree = renderer
            .create(
                <Provider store={store}>
                    <App />
                </Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('matches the snapshot with city loader and one saved city', () => {
        const mockGeolocation = {
            getCurrentPosition: jest.fn()
                .mockImplementation((success) => Promise.resolve(success({
                    coords: {
                        latitude: 10,
                        longitude: 10
                    }
                })))
        };
        navigator.geolocation = mockGeolocation;
        const store = mockStore({
            cities: [
                {
                    name: 'Moscow',
                    weather: {}
                } 
            ]
        });
        const tree = renderer
            .create(
                <Provider store={store}>
                    <App />
                </Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});