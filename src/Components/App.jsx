// import Navbar from "./Components/Navbar";
// import Sidebar from "./Components/Sidebar";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import {Home , Cryptos, News, CryptoDetails , Landing} from "./CompContainer";
import { BrowserRouter , Route , Routes } from "react-router-dom";

const App = () => {
    return ( 
        <div>
            <div className="Dapp">
            <Navbar/>
            <div className="main">
            <Sidebar/>
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>  
                        <Route exact path="/app/cryptos" element={<Cryptos/>}/> 
                        <Route exact path="/cryptos/:coinId" element={<CryptoDetails/>}/>   
                        {/* <Route exact path="/exchanges" element={<Exchanges/>}/>   */}
                        <Route exact path="/:value" element={<News/>}/>  
                    </Routes>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default App;