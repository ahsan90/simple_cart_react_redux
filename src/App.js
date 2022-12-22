
import { Provider } from 'react-redux';
import './App.css';
import Layout from './components/Layout';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout>

        </Layout>
      </div>
    </Provider>
    
  );
}

export default App;
