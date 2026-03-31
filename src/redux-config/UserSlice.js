import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "User-Slice",
    initialState:{
        token: null,
        user: null,
        isLoggedIn : false
    },
    reducers:{
        setUser: (state,action)=>{
           console.log("Inside reducer function..");
           console.log(action.payload);
           state.token = action.payload.token;
           delete action.payload.user.password
           state.user = action.payload.user
           state.isLoggedIn = true
        },
        signOut: (state,action)=>{
            state.token = null
            state.user = null
            state.isLoggedIn = false
        }
    }
});

export const {setUser,signOut} = slice.actions;
export default slice.reducer;