import Header from '../../components/Header';
import React from 'react';
import renderer from 'react-test-renderer'

describe('Header component', () => {
    test('matches the snapshot', () => {
        const tree = renderer
            .create (<Header/>).toJSON();
            expect(tree).toMatchSnapshot();
    });
});