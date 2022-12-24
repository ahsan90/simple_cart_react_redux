
import { Provider } from 'react-redux';
import './App.css';
import Layout from './components/Layout';
import store from './redux/store'
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout>
          <ProductList />
          <Cart />
        </Layout>
        <ToastContainer />
      </div>
    </Provider>
    
  );
}

export default App;
