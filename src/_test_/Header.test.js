import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Header from '../components/Header';

describe('Header', () => {
  it('renders Header component', () => {
    const h = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(h).toMatchSnapshot();
  });
});
