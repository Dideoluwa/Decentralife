import styled from "styled-components";
import SidebarOptions from "./SidebarOptions";
import { Link } from "react-router-dom";
import logo from "../Assets/flower.svg"

const Sidebar = () => {

    const Container = styled.div`
        width: 15%;  
        background: #2d2d2d;
        
        a {
            text-decoration: none;
            color: #FFFFFF;
        }
    `

    const Logo = styled.div`
        padding: 2rem;
        text-align: center;
        font-weight: 700;
        font-size: 1rem;
        color: var(--white);
        display: flex;
        align-items: center;
        gap: 5px;

        img {
            width: 50px;
        }
    `

    return ( 
        <Container>
            <Logo><img src={logo} alt="logo"/>DECENTRALIFE</Logo>
            <Link to="/home"><SidebarOptions icon="bi bi-house" text="Home" active/></Link>
            <Link to="/crypto"><SidebarOptions icon="bi bi-coin" text="Cryptocurrencies"/></Link>
            <Link to="/exchanges"><SidebarOptions icon="bi bi-currency-exchange" text="Exchanges"/></Link>
            <Link to="/news"><SidebarOptions icon="bi bi-newspaper" text="News"/></Link>
        </Container>
     );
}
 
export default Sidebar;