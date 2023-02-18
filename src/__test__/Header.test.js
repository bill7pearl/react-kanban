import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Header from '../components/Header';

const App = () => {
  <Provider store={store}>
    <Header />
  </Provider>;
};

describe('Header and Navigation test', () => {
  it('Tests navbar rendering with navigation', () => {
    const HeaderRenderer = renderer.create(<App />).toJSON();
    expect(HeaderRenderer).toMatchSnapshot();
  });
});
