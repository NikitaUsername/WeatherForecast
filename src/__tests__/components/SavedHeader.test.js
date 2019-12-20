import SavedHeader from '../../components/SavedHeader'
import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);



describe('SavedHeader component', () => {
    test('matches the snapshot withought cities', () => {

        const store = mockStore({
            cities: [
            ]
        });

        const tree = renderer
            .create(
                <Provider store={store}>
                    <SavedHeader />
                </Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('matches the snapshot with loader', () => {

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
                    <SavedHeader />
                </Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('matches the snapshot with city data', () => {

        const store = mockStore({
            cities: [
                {
                    name: 'Irkutsk',
                    weather: {
                
                        weather: [
                            { id: 500, main: "Rain", description: "light rain", icon: "10n" }
                        ],
                        main: {
                            temp: 20.46,
                            feels_like: 19.46,
                            temp_min: 19.44,
                            temp_max: 21.67,
                            pressure: 1021,
                            humidity: 83
                        },
                        wind: {
                            speed: 5.1,
                            deg: 40
                        },
                        clouds: {
                            all:90
                        }
                    }
                }
            ]
        });

        const tree = renderer
            .create(
                <Provider store={store}>
                    <SavedHeader />
                </Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
})