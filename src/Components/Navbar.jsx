import styled from "styled-components";
import logo from "../Assets/flower.svg"


const Navbar = () => {
    const Container = styled.div`
    width: 100%;
    padding: 1.5rem;
    // border: 1px solid red;
    max-height: 5vh;
    // height: 5vh;
    background-color: var(--black);
 `

    const Logo = styled.div`
    //  padding: 2rem;
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