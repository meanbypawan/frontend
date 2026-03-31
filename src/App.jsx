import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Categories from './components/category/Category';
import Product from './components/product/Product';
import ViewMore from './components/view-more/ViewMore';
import BuyNow from './components/buy-now/BuyNow';
import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Auth from './components/auth/Auth';
import SignOut from './components/user/SignOut';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Api from './Api';
import { useDispatch } from 'react-redux';
import { fetchProduct } from './redux-config/ProductSlice';
export const CategoryContext = createContext();
function App(){
  const [categoryList,setCategoryList] = useState([]);
  const dispatch = useDispatch();
  useEffect(()=>{
    loadCategories();
    dispatch(fetchProduct()); 
  },[]);
  const loadCategories = async()=>{
       try{ 
        let response = await axios.get(Api.FETCH_CATEGORIES);
        setCategoryList(response.data.categories);
       }
       catch(err){
        console.log(err);
       }
    }
  return <>
    <ToastContainer/>
    <CategoryContext.Provider value={{categoryList}}>
     <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='category' element={<Categories/>}/>
      <Route path='product' element={<Product/>}/>
      <Route path='view-more/:id' element={<Auth><ViewMore/></Auth>}/>
      <Route path='buy-now' element={<Auth><BuyNow/></Auth>}/>
      <Route path='sign-in' element={<SignIn/>}/>
      <Route path='sign-up' element={<SignUp/>}/>
      {/* <Route path='sign-out' element={<SignOut/>}/> */}
     </Routes>
     </CategoryContext.Provider>
  </>
}

export default App;