import { useContext, useEffect, useReducer } from "react";
import Header from "../header/Header";
import axios from "axios";
import Api from "../../Api";
import { CategoryContext } from "../../App";

function Categories(){
    let {categoryList} = useContext(CategoryContext);    
    return <>
      <Header/>
      <div className="container mt-3">
        <div className="row">
            {categoryList.map((category,index)=>{return <div className="p-2 col-md-2" key={category.id}>
               <div className="d-flex justify-content-center align-items-center" style={{height:"70px",boxShadow: "10px 10px 10px grey",borderRadius:"5px"}}>
                <h6 className="text-center">{category.name}</h6>
               </div>
            </div>})}
        </div>
      </div>
    </>
}
export default Categories;