import Sidebar from "./components/sidebar/sidebar.jsx";
import "./AppLayout.css";
// eslint-disable-next-line react/prop-types
function AppLayout({ children }) {
  return (
    <div className="AppLayout">
      <div className="AppLayout-sidebar">
        <Sidebar />
      </div>
      <div className="AppLayout-body">{children}</div>
    </div>
  );
}

export default AppLayout;
