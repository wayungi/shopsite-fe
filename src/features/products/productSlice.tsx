import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// Define a type for the slice state
interface ProductState {
    products: Product[],
    categories: string[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | undefined, // this was string | null but ive been faced with an error in the extrareducers, so i changed it to sting | undefiend
  }

// Define the initial state using that type
const initialState: ProductState = {
    products: [],
    categories: ["Kitchen ware", "games", "foot wear"],
    status: "idle",
    error: ''
  } //as ProductState


export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const res = await fetch(`http://127.0.0.1:3000/product/`);
    if(!res.ok) throw new Error("Product download failed: Please refresh the application")
    return res.json(); 
});

export const addProductAsync = createAsyncThunk("products/addNewProduct", async (productData: ProductData) => {
  // console.log(productData)
  // const res =  await fetch('http://127.0.0.1:3000/product', {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": 'application/json',
  //   },
  //   body: JSON.stringify(data)
  // } );
  // if(!res.ok) throw new Error("Could not add product")
  // return res.json(); // parses JSON response into native JavaScript objects
});

export const ProductSlice = createSlice({
  name: 'products',
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

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading"

      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = [...action.payload.products];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.error.message;
      })
  },
})

export const { addProduct, deleteProduct, editProduct } = ProductSlice.actions;
export const selectProducts = (state: RootState) => state.products.products;
export default ProductSlice.reducer;
