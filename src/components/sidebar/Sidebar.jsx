import "./sidebar.css"
import imgA from "../../img/WelshCorgi.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
        
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src={imgA} alt="?" />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CREGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">It</li>
            </ul>
        </div>
        <div className="sidebarItem"></div>
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i class="sidebarIcon fab fa-facebook-square"></i>
            <i class="sidebarIcon fab fa-twitter-square"></i>
            <i class="sidebarIcon fab fa-instagram-square"></i>
        </div>
    </div>
  )
}
