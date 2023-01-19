import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "../Assets/Looper.svg";

const LandingPage = styled.section`
  /* border: 1px solid red; */
  height: 100vh;
  width: 100vw;
  background-color: #19191d;
  color: white;
  display: flex;
  flex-direction: column;
  background-image: url(${background});
  background-position-y: 20%;

  nav {
    /* border: 1px solid red; */
    padding: 1rem;
    display: flex;

    .navLink {
      margin: auto;
      display: flex;
      gap: 5rem;
    }

    div > a {
      color: white;
      text-decoration: none;
    }
  }

  > div {
    margin: auto;
    /* border: 1px solid red; */
    text-align: center;
    width: 60vw;

    h1 {
      font-size: 5rem;
      font-family: "Space Grotesk", sans-serif;
      font-weight: 700;
      background: linear-gradient(91.06deg, #ff1cf7 2.26%, #38f2af 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      /* text-fill-color: transparent; */
    }

    p {
      color: #cbcbcb;
      font-family: "Inter", sans-serif;
    }

    button {
      font-weight: 500;
      font-size: 1.2rem;
      /* line-height: 1rem; */
      margin-top: 1rem;
      padding: 0.5rem 1.5rem;
      border-radius: 70px;
      cursor: pointer;
      color: #cbcbcb;
      background: transparent;
      border: 1.5px solid #cbcbcb;
    }
  }
`;

const Landing = () => {
  return (
    <LandingPage>
      <nav>
        <div className="navLink">
          <a href="/">Home</a>
          <a href="/">Home</a>
          <a href="/">Home</a>
          <a href="/">Home</a>
        </div>
      </nav>

      <div>
        <h1>The decentralized Web3 ecosystem</h1>
        <p>
          Decentralife is an easy to use dapp , view value statistics, market
          cap and supply of cryptocurrencies while also being able to transfer
          tokens seamlessly. Our goal is to keep you up to date with the latest
          happenings in the crypto space and regulated access to the digital and
          blockchain ecosystem.
        </p>
        <Link to="/dashboard">
          <button>Get Started</button>
        </Link>
      </div>
      {/* <Link to='/app'>Get Started</Link> */}
    </LandingPage>
  );
};

export default Landing;
