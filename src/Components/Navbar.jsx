import styled from "styled-components";
import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";
import Marqueee from "./Marquee";


const Navbar = () => {
    const Container = styled.div`
    width: 100%;
    padding: 1.3rem;
    /* max-height: 5vh; */
    background: #25272E;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */

    a {
        text-decoration: none;
    }

    button {
        // margin-left: auto;
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
    width: 11rem;

    img {
        width: 1.5rem;
    }

    `
    return ( 
        <>
            <Container>
                <Link to="/"><Logo><img src={logo} alt="logo"/>DECENTRALIFE</Logo></Link>
                {/* <button>connect</button> */}
            </Container>
            {/* <Marqueee/> */}
        </>
     );
}
 
export default Navbar;