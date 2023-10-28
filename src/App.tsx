import { useEffect } from 'react';
import './App.css'
import { fetchProducts } from './features/products/productSlice';
import { useAppDispatch } from './app/hooks';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Layout from './components/Layout';
// pages
// import Product from './features/products/Product';
// import AddNewProduct from './features/products/AddNewProduct';;
// import Cart from './features/products/Cart';
// import Orders from './features/products/Orders';
// import ProductManagement from './features/products/ProductManagement';

function App() {

  //dispatch the action to make the call to the API to load products into the redux store
  const dispatch = useAppDispatch();
  useEffect(() => {
      dispatch(fetchProducts())
  }, []);

  return (
    <main>
        <Header />
        <Layout>
          <NavBar />  {/* place to the left, should appear on all admin screens */}

          {/* this is the dynamic section of the app */}

          {/* <Product />  {/* these will be under the routes 
          <AddNewProduct />
          <Cart />
          <Orders />
          <ProductManagement /> */}
        </Layout>
    </main>
  )
}

export default App
