import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import axios from 'axios';
import BASE_URL from './BASE_URL';

function App() {

  const showCart = useSelector(state => state.show.showCart)
  const cart = useSelector(state => state.cart)

  const sentData =  async () => {
    try {
      axios.put(`${BASE_URL}/cart.json`, JSON.stringify(cart))
    } catch (error) {
      
    }
  }

  useEffect(() => {
    sentData()
  }, [cart])

  return (
    <Layout>
      {showCart &&  <Cart />}
      <Products /> 
    </Layout>
  );
}

export default App;
