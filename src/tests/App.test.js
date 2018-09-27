import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../react/components/Button';
import DogMedia from '../react/components/DogMedia';

// describe('Button component', () => {
//     it('Button components renders initially', () => {
//         const component = renderer.create(<Button onClick={() => {}} />);

//         expect(component.toJSON()).toMatchSnapshot();
//     });

//     it('renders with null as an initial state', () => {
//         const component = renderer.create(<Button onClick={() => {}} />);
//         const instance = component.getInstance();
//         // console.log(instance);

//         expect(instance.state).toBeNull();
//     });
// });

// describe('DogMedia component', () => {
//     it('renders video', () => {
//         const component = renderer.create(<DogMedia mediaType="video" />);
//         const instance = component.getInstance();

//         expect(instance.props.mediaType).toBe('video');
//     });
// });

// function sum(a, b) {
//     return a + b;
// }

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });
