import styled from "styled-components";
// import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptoDataQuery } from "../Services/CryptoApi";
import Cryptos from "./Cryptos";
import News from "./News";
import Marqueee from "./Marquee";
import meta from "../Assets/metaverse.png";
import { useEffect } from "react";

const Home = () => {
  const Container = styled.div`
    color: var(--white);
    min-height: 100vh;
    /* border: 1px solid red; */
    position: relative;
    padding-bottom: 3rem;

    @media screen and (max-width: 768px) {
    }
  `;

  const Hero = styled.div`
    /* border: 1px solid red; */
    /* padding: 5rem; */

    margin: 1rem;
    margin-top: 5rem;
  `;

  const StatsContainer = styled.div`
    padding: 1rem;
    padding-top: 3rem;
    h1 {
      font-size: 1.5rem;
    }

    .top {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;

      a {
        margin-left: auto;
        text-decoration: none;
        color: #38f2af;
      }
    }
  `;

  const { data, isFetching } = useGetCryptoDataQuery(10);
  //    const globalStats = data?.data?.stats;

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isFetching) return <div className="loading">"Loading..."</div>;

  return (
    <Container>
      <Marqueee />
      <Hero>
        <img src={meta} alt="" />
      </Hero>
      <StatsContainer>
        <div className="top">
          <h1>Top 10 Cryptocurrencies</h1>
          <Link to="/cryptos">Show More</Link>
        </div>
        <Cryptos simplified />
      </StatsContainer>
      <StatsContainer>
        <div className="top">
          <h1>Latest Crypto News</h1>
          <Link to="/news">Show More</Link>
        </div>
        <News simplified />
      </StatsContainer>
    </Container>
  );
};

export default Home;
