
import { HorizontalSplitOutlined } from "@mui/icons-material";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbarBox">
         <span className="icon">
          <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer"><HorizontalSplitOutlined /></a>
         </span>
      </div>
      <div className="navItem">
        <ul>
          <li>ok1</li>
          <li>ok2</li>
          <li>ok3</li>
          <li>ok4</li>
          <li>ok5</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar