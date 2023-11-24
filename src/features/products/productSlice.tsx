import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { Product, CartItem } from '../../Model/Product';

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

// type CartItem = {
//   id: string,
//   name: string,
//   src: string,
//   unitPrice: number,
//   quantity: number,
// }


interface ProductState {
  orderedItems: CartItem[],
  products: Product[],
  categories: string[],
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | undefined,
}


const initialState: ProductState = {
    orderedItems: [
          // {
          //   id: "655d9a5a66ea5987e81d680d",
          //   name: "Comfy chair armless",
          //   src: "https://res.cloudinary.com/ddwvtbyfm/image/upload/v1700633177/rowxvbv8vibbamaeeazl.jpg",
          //   unitPrice: 450000,
          //   quantity: 2,
          // },
    ],
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

    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.orderedItems = [...state.orderedItems, action.payload];
    },

    changeQunatity: (state, { payload: { id, itemCount} }) => {
      if(itemCount < 1) return;

      const updatedOrder = state.orderedItems.map((orderedItem) => {
        if(orderedItem.id === id) {
          return {...orderedItem, quantity: parseInt(itemCount)}
        }
        return orderedItem;
      });

      console.log(updatedOrder)
      state.orderedItems = [...updatedOrder]
    },

    removeFromCart: (state, {payload}) => {
      state.orderedItems = state.orderedItems.filter((cartItem) => cartItem.id !== payload);
    }
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

export const { addProduct, editProduct, addToCart, removeFromCart, changeQunatity } = ProductSlice.actions;
export const selectProducts = (state: RootState) => state.products.products;
export const selectCartHistory = (state: RootState) => state.products.orderedItems;
export const cartItemCount = (state: RootState) => state.products.orderedItems.length;
export default ProductSlice.reducer;
