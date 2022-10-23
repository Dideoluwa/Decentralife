import styled from "styled-components";
import logo from "../Assets/flower.svg";
import { Link } from "react-router-dom";


const Navbar = () => {
    const Container = styled.div`
    width: 100%;
    padding: 1rem;
    max-height: 5vh;
    background-color: var(--black);

    a {
        text-decoration: none;
    }

    @media screen and (max-width: 768px) {
        padding: 1.2rem;
    }
 `

    const Logo = styled.div`
    text-align: center;
    font-weight: 800;
    font-size: 1.2rem;
    color: var(--white);
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: 'Satoshi', sans-serif;
    width: 11rem;

    img {
        width: 40px;
    }

    `
    return ( 
        <Container>
            <Link to="/"><Logo><img src={logo} alt="logo"/>DECENTRALIFE</Logo></Link>
        </Container>
     );
}
 
export default Navbar;