import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../../redux-config/UserSlice";

function Header() {
    const navigate = useNavigate();
    const {isLoggedIn} = useSelector((store)=>store.user);
    const dispatch = useDispatch();
    const handleSignOut = ()=>{
        dispatch(signOut());
        navigate("/sign-in");
    }
    return <>
        <nav className="navbar navbar-expand-sm bg-light">

            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/product">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category">Categories</Link>
                    </li>
                    { !isLoggedIn && <li className="nav-item">
                        <Link className="nav-link" to="/sign-in">Sign in</Link>
                    </li>}
                    {!isLoggedIn && <li className="nav-item">
                        <Link className="nav-link" to="">Sign up</Link>
                    </li>}
                    {isLoggedIn && <li className="nav-item">
                        <label className="nav-link" onClick={handleSignOut}>Sign out</label>
                    </li>}
                </ul>
            </div>

        </nav>
    </>
}
export default Header;