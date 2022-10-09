import styled from "styled-components";
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptoDataQuery } from "../Services/CryptoApi";

const Home = () => {

   const Container = styled.div`
        color: var(--white);
        min-height: 100vh;
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

                h3 {
                    font-size: 15px;
                }
                p {
                    font-size: 25px;
                }
            }
        }
   `;

    return ( 
        <Container>
            <GlobalStats>
                <h1>Global Crypto Stats</h1>
                <ul>
                    <li>
                        <h3>Total Cryptocurrencies</h3>
                        <p>567</p>
                    </li>
                    <li>
                        <h3>Total Market Cap</h3>
                        <p>567</p>
                    </li>
                    <li>
                        <h3>Total Markets</h3>
                        <p>567</p>
                    </li>
                    <li>
                        <h3>Total Exchanges</h3>
                        <p>567</p>
                    </li>
                    <li>
                        <h3>Total 24h Volume</h3>
                        <p>567</p>
                    </li>
                </ul>
            </GlobalStats>
        </Container>
     );
}
 
export default Home;