import Sidebar from "./Components/Sidebar";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import {Home , Cryptos, News, CryptoDetails , Landing} from "./Components/CompContainer";
import Navbar from "./Components/Navbar";
import Apps from "./Components/App";


function App() {
  return (
      <BrowserRouter>   
        <Routes>
              <Route exact path="/" element={<Landing/>}/>  
              <Route exact path="/app" element={<Apps/>}/> 
              {/* <Route exact path="/cryptos/:coinId" element={<CryptoDetails/>}/>    */}
              {/* <Route exact path="/exchanges" element={<Exchanges/>}/>   */}
              {/* <Route exact path="/news" element={<News/>}/>   */}
            </Routes>
      </BrowserRouter>
  );
}

export default App;
