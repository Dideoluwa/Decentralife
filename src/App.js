// import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Cryptos,
  News,
  CryptoDetails,
  Landing,
} from "./Components/CompContainer";
// import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route exact path="/news" element={<News/>}/>   */}
          <Route exact path="/dashboard" element={<Dashboard />}>
            <Route exact path="/dashboard" element={<Home />} />
            <Route exact path="news" element={<News />} />
            <Route exact path="cryptos" element={<Cryptos />} />
            <Route exact path="cryptos/:coinId" element={<CryptoDetails />} />
          </Route>
          <Route exact path="/:value" element={<News />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
