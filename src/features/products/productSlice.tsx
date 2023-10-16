import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import type Product from '../../Model/Product';
import data from '../../Model/product.json';

// Define a type for the slice state
interface ProductState {
    products: Product[],
    categories: string[],
  }

// Define the initial state using that type
const initialState: ProductState = {
    products: data, // this is an array
    categories: ["Kitchen ware", "games", "foot wear"]
  } //as ProductState

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products = [...state.products, action.payload]
    },
    
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    
    editProduct: (state, action: PayloadAction<Product>) => {
      const filteredProduct =  state.products.filter((product) => product.id === action.payload.id);
      const filteredProducts= state.products.filter((product) => product.id !== action.payload.id);
      const editedProduct = {...filteredProduct, ...action.payload};
      state.products = [...filteredProducts, editedProduct];
    },
  },
})

export const { addProduct, deleteProduct, editProduct } = ProductSlice.actions
export const selectProducts = (state: RootState) => state.products.products
export default ProductSlice.reducer
