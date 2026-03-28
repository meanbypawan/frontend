import { useEffect, useReducer } from "react";
import Header from "../header/Header";
import axios from "axios";
import Api from "../../Api";

function Categories(){
    const [state,dispatch] = useReducer((state,action)=>{
        if(action.type == "set-categories"){
            state.categoryList = action.payload;
        }
        return {...state};
    },{categoryList:[]})
    useEffect(()=>{
        loadCategories();
    },[]);
    const loadCategories = async()=>{
       try{ 
        let response = await axios.get(Api.FETCH_CATEGORIES);
        console.log(response.data)
        dispatch({type:"set-categories",payload: response.data.categories});
       }
       catch(err){
        console.log(err);
       }
    }
    return <>
      <Header/>
      <div className="container mt-3">
        <div className="row">
            {state.categoryList.map((category,index)=>{return <div className="p-2 col-md-2" key={category.id}>
               <div className="d-flex justify-content-center align-items-center" style={{height:"70px",boxShadow: "10px 10px 10px grey",borderRadius:"5px"}}>
                <h6 className="text-center">{category.name}</h6>
               </div>
            </div>})}
        </div>
      </div>
    </>
}
export default Categories;