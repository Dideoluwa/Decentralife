import styled from "styled-components";
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptoDataQuery } from "../Services/CryptoApi";
import Cryptos from "./Cryptos";
import News from "./News";

const Home = () => {

   const Container = styled.div`
        color: var(--white);
        min-height: 100vh;

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
                color: rgba(187,75,164,1);
            }
        }
   `

   const {data , isFetching} = useGetCryptoDataQuery(10);
   const globalStats = data?.data?.stats;

   if(isFetching) return <div className="loading">"Loading..."</div>

    return ( 
        <Container>
            <GlobalStats>
                <h1>Global Crypto Stats</h1>
                <ul>
                    <li>
                        <h3>Total Cryptocurrencies</h3>
                        <p>{globalStats.total}</p>
                    </li>
                    <li>
                        <h3>Total Market Cap</h3>
                        <p>${millify(globalStats.totalMarketCap)}</p>
                    </li>
                    <li>
                        <h3>Total Markets</h3>
                        <p>{millify(globalStats.totalMarkets)}</p>
                    </li>
                    <li>
                        <h3>Total Exchanges</h3>
                        <p>{globalStats.totalExchanges}</p>
                    </li>
                    <li>
                        <h3>Total 24h Volume</h3>
                        <p>${millify(globalStats.total24hVolume)}</p>
                    </li>
                </ul>
            </GlobalStats>
            <StatsContainer>
                <div className="top">
                    <h1>Top 10 Cryptocurrencies in the world</h1>
                    <Link to="/cryptos">Show more</Link>
                </div>
                <Cryptos simplified/>
            </StatsContainer>
            <StatsContainer>
                <div className="top">
                    <h1>Latest Crypto News</h1>
                    <Link to="/news">Show more</Link>
                </div>
                <News simplified/>
            </StatsContainer>
        </Container>
     );
}
 
export default Home;