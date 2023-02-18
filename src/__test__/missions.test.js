import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import RenderMissions from '../components/missions';
import store from '../redux/configureStore';

const App = () => {
  <Provider store={store}>
    <RenderMissions />
  </Provider>;
};

describe('Display missions component test', () => {
  it('Tests missions page rendering and fetching data from API', () => {
    const MissionsRenderer = renderer.create(<App />).toJSON();
    expect(MissionsRenderer).toMatchSnapshot();
  });
});
