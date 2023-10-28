import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './app/store.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.tsx';
// pages
import Product from './features/products/Product';
import AddNewProduct from './features/products/AddNewProduct';;
// import Cart from './features/products/Cart';
// import Orders from './features/products/Orders';
// import ProductManagement from './features/products/ProductManagement';


const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />, //root route, all other routes will render inside of it, it is also the root layout
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/product",
        element: <Product />
      },
      {
        path: "/new",
        element: <AddNewProduct />
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
      {/* <App /> */}
    </Provider>
  </React.StrictMode>,
)
