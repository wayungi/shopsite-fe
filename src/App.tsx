import { useEffect } from 'react';
import './App.css'
import { fetchProducts } from './features/products/productSlice';
import { useAppDispatch } from './app/hooks';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Layout from './components/Layout';
import { Outlet } from 'react-router-dom';

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
          <Outlet />
        </Layout>
    </main>
  )
}

export default App
