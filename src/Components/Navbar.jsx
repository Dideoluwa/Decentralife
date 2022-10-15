import styled from "styled-components";
import logo from "../Assets/flower.svg"


const Navbar = () => {
    const Container = styled.div`
    width: 100%;
    padding: 1.5rem;
    max-height: 5vh;
    background-color: var(--black);

    @media screen and (max-width: 768px) {
        padding: 1.2rem;
    }
 `

    const Logo = styled.div`
    text-align: center;
    font-weight: 700;
    font-size: 1rem;
    color: var(--white);
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: 'Satoshi', sans-serif;

    img {
        width: 30px;
    }

    `
    return ( 
        <Container>
            <Logo><img src={logo} alt="logo"/>DECENTRALIFE</Logo>
        </Container>
     );
}
 
export default Navbar;