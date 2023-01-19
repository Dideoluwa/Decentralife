import styled from "styled-components";
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptoDataQuery } from "../Services/CryptoApi";
import Cryptos from "./Cryptos";
import News from "./News";
import Marqueee from "./Marquee";

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

   const GlobalStats = styled.div`
   padding: 1rem;

        h1 {
            font-size: 1.5rem;
        }

        ul {
            list-style: none;
            margin-top: 1rem;
            display: flex;
            background: #323233;
            border-radius: 10px;
            padding: 1rem;
            

            li {
                width: 25%;
                padding: 5px;
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: center;

                h3 {
                    font-size: 15px;
                }
                p {
                    font-size: 25px;
                }
            }}

        @media screen and (max-width: 768px) {
            li {

                h3 {
                    font-size: 10px ;
                }

                p {
                    font-size: 15px;
                }
            }
        }
   `;

   const StatsContainer = styled.div`
   padding: 1rem;
   padding-top: 5rem;
        h1 {
            font-size: 1.5rem;
            }

        .top {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;

            a{
                margin-left: auto;
                text-decoration: none;
                color: #38F2AF;
            }
        }
   `

   const {data , isFetching} = useGetCryptoDataQuery(10);
//    const globalStats = data?.data?.stats;

   if(isFetching) return <div className="loading">"Loading..."</div>

    return ( 
        <Container>
            <Marqueee/>
            <StatsContainer>
                <div className="top">
                    <h1>Top 10 Cryptocurrencies</h1>
                    <Link to="/cryptos">Show More</Link>
                </div>
                <Cryptos simplified/>
            </StatsContainer>
            <StatsContainer>
                <div className="top">
                    <h1>Latest Crypto News</h1>
                    <Link to="/news">Show More</Link>
                </div>
                <News simplified/>
            </StatsContainer>
        </Container>
     );
}
 
export default Home;