import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import ProductSlice from "./ProductSlice";
const store = configureStore({
    reducer:{
        user: UserSlice,
        products: ProductSlice
    }
});

// user: {token: null, user: null}
// product: {isLoading: false, error: null, productList: []}
export default store;