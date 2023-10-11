import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import type Product from '../../Model/Product';
import data from '../../Model/product.json';

// Define a type for the slice state
interface ProductState {
    products: Product[]
  }

// interface CounterState {
//   value: number
// }


// Define the initial state using that type
const initialState: ProductState = {
    products: data, // this is an array
  } //as ProductState
// const initialState: CounterState = {
//   value: 0,
// }

export const ProductSlice = createSlice({
  name: 'product',
  // name: 'counter',

  // `createSlice` will infer the state type from the `initialState` argument
  initialState,

  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products = [...state.products, action.payload]
    },
    // increment: (state) => {
    //   state.value += 1
    // },
    
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    
    // Use the PayloadAction type to declare the contents of `action.payload`
    editProduct: (state, action: PayloadAction<Product>) => {
      const filteredProduct =  state.products.filter((product) => product.id === action.payload.id) // filter out the product to edit
      const filteredProducts= state.products.filter((product) => product.id !== action.payload.id); // filter out the products not to edit
      const editedProduct = {...filteredProduct, ...action.payload} // edit the product
      state.products = [...filteredProducts, editedProduct] // add the edited profudct back into the value array
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { addProduct, deleteProduct, editProduct } = ProductSlice.actions
//export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectProducts = (state: RootState) => state.products.products
// export const selectCount = (state: RootState) => state.counter.value

export default ProductSlice.reducer
// export default counterSlice.reducer