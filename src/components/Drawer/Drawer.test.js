import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Drawer from './index';


describe('<Drawer >', () => {

    test('renders content', () => {
        const component = render(<Drawer />)
        // console.log(component);
        component.getByAltText('Electrocontrol logo');
        component.getByAltText('menu');
    });
});

