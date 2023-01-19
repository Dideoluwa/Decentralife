import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <div className="Dapp">
        <Navbar />
        <div className="main">
          <Sidebar />
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
