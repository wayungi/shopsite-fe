import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import Product from '../../Model/Product';

interface ProductState {
    products: Product[],
    categories: string[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | undefined,
  }

type ProductData = {
  name: string,
  imageUrl: string,
  price: string,
  category: string,
  stock: string
}

type ProductId = {
  _id: string
}

const initialState: ProductState = {
    products: [],
    categories: ["Kitchen ware", "games", "foot wear"],
    status: "idle",
    error: ''
  } //as ProductState


export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const res = await fetch(`http://127.0.0.1:3000/product/`);
    if(!res.ok) throw new Error("Product download failed: Please refresh the application");
    return res.json(); 
});

export const postProduct = createAsyncThunk("products/postProducts", async(productData: ProductData) => {
  const product = {...productData, price: +productData.price, stock: +productData.stock }
  console.log(product)
  const res =  await fetch(`http://127.0.0.1:3000/product/`, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product)        
  });
  if(!res.ok) throw new Error("Product could not be saved, Please try gain");
  return await res.json();
});

export const updateProduct = createAsyncThunk("products/updateProduct", async(productData: ProductData) => {
  const product = {...productData, price: +productData.price, stock: +productData.stock }
  // console.log(product)
  const res =  await fetch('http://127.0.0.1:3000/product/', {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product)
  });
  if(!res.ok) throw new Error("Product could not be saved, Please try gain");
  return await res.json();
})

export const deleteProduct = createAsyncThunk('products/deleteProduct', async(productId: ProductId) => {
  const res =  await fetch('http://127.0.0.1:3000/product/', {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productId)
  });
  if(!res.ok) throw new Error("Product not deleted");
  return await res.json();
})

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products = [...state.products, action.payload]
    },
       
    editProduct: (state, action: PayloadAction<Product>) => {
      const filteredProduct =  state.products.filter((product) => product._id === action.payload._id);
      const filteredProducts= state.products.filter((product) => product._id !== action.payload._id);
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
      .addCase(postProduct.fulfilled, (state, action) => {
        state.products = [...state.products, action.payload.result]
      })
      .addCase(updateProduct.fulfilled, (state, { payload }) => {
        const filteredProducts = state.products.filter((product) => product._id !== payload._id);
        state.products = [...filteredProducts, payload]
      })
      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        const filteredProducts = state.products.filter((product) => product._id !== payload._id);
        state.products = [...filteredProducts];
      })
  },
})

export const { addProduct, editProduct } = ProductSlice.actions;
export const selectProducts = (state: RootState) => state.products.products;
export default ProductSlice.reducer;
