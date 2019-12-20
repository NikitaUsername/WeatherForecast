import Weather from '../../components/Weather'
import React from 'react'
import renderer from 'react-test-renderer'

describe('Weather component', () => {
    test('matches the snapshot with city', () => {

        const info = 
            {
                name: 'Moscow',
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
            };
        
        const tree = renderer
            .create (<Weather weatherInfo={info}/>).toJSON();
            expect(tree).toMatchSnapshot();
    });

    test('matches the snapshot with loader', () => {

        const info = undefined;
        
        const tree = renderer
            .create (<Weather weatherInfo={info}/>).toJSON();
            expect(tree).toMatchSnapshot();
    });
});