import Sidebar from "./Components/Sidebar";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import {Home , Cryptos, News, CryptoDetails , Landing} from "./Components/CompContainer";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/App";


function App() {
  return (
      <BrowserRouter> 
      <div className="App">  
        <Routes>
              <Route exact path="/" element={<Landing/>}/>  
              <Route exact path="/app" element={<Dashboard/>}/> 
              <Route exact path="/app/:news" element={<News/>}/>  
            </Routes>
      </div> 
      </BrowserRouter>
  );
}

export default App;
