import { useEffect } from 'react';
import './App.css'
import Home from './components/pages/Home';
import { fetchProducts } from './features/products/productSlice';
import { useAppDispatch } from './app/hooks';

function App() {

  //dispatch the action to make the call to the API to load products into the redux store
  const dispatch = useAppDispatch();
  useEffect(() => {
      dispatch(fetchProducts())
  }, []);

  return (
    <main>
      <Home />
    </main>
  )
}

export default App
