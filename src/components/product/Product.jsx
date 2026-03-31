import { useEffect, useReducer } from "react";
import Header from "../header/Header";
import axios from "axios";
import Api from "../../Api";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Product(){
    const navigate = useNavigate();
    const {isLoading,error,productList} = useSelector((store)=>store.products);
    return <>
      <Header/>
      <div className="container mt-2">
        <div className="row">
            {(!error) && productList?.map((product,index)=>{return <div key={product.id} className="col-md-3 p-2">
               <div className="d-flex flex-column justify-content-center align-items-center" style={{height:"350px",boxShadow:"10px 10px 10px blue"}}>
                 <img src={product.thumbnail} height="200px"/>

                 <p>{product.title}</p>
                 <h6>{product.price}</h6>
                 <button onClick={()=>{navigate(`/view-more/${product.id}`)}} className="btn btn-warning" style={{width:"100%"}}>View more</button>
               </div> 
            </div>})}
        </div>
      </div>
    </>
}

export default Product;