import Sidebar from "./Components/Sidebar";
import { BrowserRouter , Route , Routes } from "react-router-dom";
// import Home from "./Components/Home";
import Main from "./Components/Main";
import Cryptos from "./Components/Cryptos";
import Exchanges from "./Components/Exchanges";
import News from "./Components/News";
import {Home } from "./Components/CompContainer"

function App() {
  console.log(Home);
  return (
      <BrowserRouter>   
        <div className="App">
          <Sidebar/>
          <div className="content">
          <Routes>
            <Route exact path="/home" element={<Home/>}/>  
            <Route exact path="/cryptos" element={<Cryptos/>}/>  
            <Route exact path="/exchanges" element={<Exchanges/>}/>  
            <Route exact path="/news" element={<News/>}/>  
          </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
