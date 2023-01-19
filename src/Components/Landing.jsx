import { Link } from "react-router-dom";
import styled from "styled-components";

const LandingPage = styled.section`
    /* border: 1px solid red; */
    height: 100vh;
    width: 100vw;
    background-color: #19191d;
    color: white;
`

const Landing = () => {
    return ( 
        <LandingPage>
            landing
            <Link to='/app'>Get Started</Link>
        </LandingPage>
     );
}
 
export default Landing;