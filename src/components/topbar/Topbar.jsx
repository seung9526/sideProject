import { Link } from "react-router-dom"
import "./topbar.css"

export default function Topbar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft"></div>
            <i class="topIcon fab fa-facebook-square"></i>
            <i class="topIcon fab fa-twitter-square"></i>
            <i class="topIcon fab fa-instagram-square"></i>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                    <Link to="/" className="link">HOME</Link></li>
                    <li className="topListItem"><Link to="/" className="link">ABOUT</Link></li>
                    <li className="topListItem"><Link to="/" className="link">CONTACT</Link></li>
                    <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>
                    <li className="topListItem">
                        {/* {user && "LOGOUT"} */}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (

            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            
            ) : (
                <ul className="topList">
                    <li className="topListItem">
                    <Link className="link" to="/login">LOGIN</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/register">REGISTER</Link>
                    </li>
                </ul>
            )
        }
            <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
