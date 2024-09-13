import Sidebar from "./components/sidebar/sidebar.jsx";
import "./AppLayout.css";
// eslint-disable-next-line react/prop-types
function AppLayout({ children }) {
  return (
    <div className="AppLayout">
      <Sidebar />
      {children}
    </div>
  );
}

export default AppLayout;
