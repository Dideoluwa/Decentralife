import styled from "styled-components";
import SidebarOptions from "./SidebarOptions";
import { Link } from "react-router-dom";

const Sidebar = () => {

    const Container = styled.div`
        width: 14%;  
        background: #25272E;
        border-right: 1px solid #373943;
        
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
            <Link to="/dashboard"><SidebarOptions icon="bi bi-house" text="Home" active/></Link>
            <Link to="/"><SidebarOptions icon="bi bi-send" text="Send" active/></Link>
            <Link to="/dashboard/cryptos"><SidebarOptions icon="bi bi-coin" text="Crypto Stats"/></Link>
            <Link to="/news"><SidebarOptions icon="bi bi-newspaper" text="News"/></Link>
            <Link to="/"><SidebarOptions icon="bi bi-patch-question" text="FAQ" active/></Link>
        </Container>
     );
}
 
export default Sidebar;