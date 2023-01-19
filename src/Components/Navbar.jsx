import styled from "styled-components";
import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";
import Marqueee from "./Marquee";


const Navbar = () => {
    const Container = styled.nav`
    max-width: 100vw;
    padding: 1rem;
    /* padding-right: 1.3rem; */
    /* max-height: 5vh; */
    background: #25272E;
    display: flex;
    /* flex-wrap: wrap; */
    /* justify-content: space-between; */
    border-bottom: 1px solid #373943;
    /* border: 1px solid red; */

    a {
        text-decoration: none;
    }

    button {
         margin-left: auto;
         background: #38F2AF;
         /* color: white; */
         font-weight: 600;
         padding: 0.5rem 0.5rem;
         border-radius: 5px;
         cursor: pointer;
         border: none;
         font-family: 'Inter', sans-serif;
         /* background: linear-gradient(91.06deg, #38F2AF  2.26%,  #FF1CF7 100%); */
    }

    button:hover {
        background: #2cc08a;
    }

    @media screen and (max-width: 768px) {
        padding: 1.2rem;
    }
 `

    const Logo = styled.div`
    text-align: center;
    font-weight: 800;
    font-size: 1.2rem;
    color: #38F2AF;
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: 'Oswald', sans-serif;
    /* width: 11rem; */
    /* border: 1px solid red; */

    img {
        width: 1.5rem;
    }

    `
    return ( 
        <>
            <Container>
                <Link to="/"><Logo><img src={logo} alt="logo"/>DECENTRALIFE</Logo></Link> 
                <button>Connect Wallet</button>  
            </Container>
        </>
     );
}
 
export default Navbar;