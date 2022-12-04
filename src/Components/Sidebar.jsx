import styled from "styled-components";
import SidebarOptions from "./SidebarOptions";
import { Link } from "react-router-dom";

const Sidebar = () => {

    const Container = styled.div`
        width: 15%;  
        background: #2d2d2d;
        
        a {
            text-decoration: none;
            color: #FFFFFF;
        }
    
        @media screen and (max-width: 768px) {
            display: none;
            width: 20%;
        }
    `

    return ( 
        <Container>
            <Link to="/"><SidebarOptions icon="bi bi-house" text="Home" active/></Link>
            <Link to="/cryptos"><SidebarOptions icon="bi bi-coin" text="Cryptocurrencies"/></Link>
            {/* <Link to="/exchanges"><SidebarOptions icon="bi bi-currency-exchange" text="Exchanges"/></Link> */}
            <Link to="/news"><SidebarOptions icon="bi bi-newspaper" text="News"/></Link>
        </Container>
     );
}
 
export default Sidebar;