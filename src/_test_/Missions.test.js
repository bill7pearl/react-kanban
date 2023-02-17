import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Missions from '../components/Missions';

describe('Missions', () => {
  it('renders Missions component', () => {
    const m = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Missions />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(m).toMatchSnapshot();
  });
});
