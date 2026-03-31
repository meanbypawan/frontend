import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

function Auth({children}){
   let {isLoggedIn} = useSelector((store)=>store.user);
   if(isLoggedIn)
    return children; // <BuyNow/>
   return <Navigate to="/sign-in"/>
}

export default Auth;