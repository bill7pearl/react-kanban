import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import RenderRockets from '../components/Rockets';
import store from '../redux/configureStore';

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}><RenderRockets /></Provider>,
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
