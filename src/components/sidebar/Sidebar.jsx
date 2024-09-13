import { Link } from "react-router-dom";
import "./Sidebar.css";
const MenuItem = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Map Function",
    path: "/mapping",
  },
  {
    name: "Walking For Nex Function",
  },
];
function Sidebar() {
  return (
    <div className="sidebar">
      {/* <h1>sidebar</h1> */}
      {MenuItem.map((Item, index) => (
        <div key={index} className="sidebar-menu">
          <Link style={{ textDecoration: "none" }} to={Item.path}>
            <h3>{Item.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
