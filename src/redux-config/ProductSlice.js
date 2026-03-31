import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Api from "../Api";
// dispatch(fetchProduct())
export const fetchProduct = createAsyncThunk("Product-Slice/fetchProduct", async () => {
    try {
        let response = await axios.get(Api.FETCH_PRODUCTS);
        return response.data.products; // {products: [{},{}]}  
    }
    catch (err) {
        console.log(err);
    }
});
const slice = createSlice({
    name: "Product-Slice",
    initialState: {
        productList: [],
        isLoading: false,
        error: null 
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            state.isLoading = false
            state.productList = action.payload;
        })
        .addCase(fetchProduct.rejected,(state,action)=>{
            state.isLoading = false
            state.error = "Oops! something went wrong.."
        })
        .addCase(fetchProduct.pending,(state,action)=>{
            state.isLoading = true
        });
    }
});

export default slice.reducer;