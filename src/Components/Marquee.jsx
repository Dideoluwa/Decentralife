import styled from "styled-components";
import { useGetCryptoDataQuery } from "../Services/CryptoApi";
import millify from "millify";
import Marquee from "react-fast-marquee";

const Section = styled.ul`
    padding: 10px;
    display: flex;
    background: #2b2e37;
    /* gap: 2.5rem; */
    font-size: 1rem;
    list-style: none;
    position: fixed;
    margin-top: -2px;
    z-index: 10;
    /* border: 1px solid blue; */

    h2 {
        width: 12%;
        color: white;
    }

    li {
        /* align-items: center; */
        margin-right: 2rem;
        
        h3 {
            color: #38F2AF;
        }

        span {
            color: white;
        }
    }
`
const Marqueee = () => {
    const {data , isFetching} = useGetCryptoDataQuery(10);
    const globalStats = data?.data?.stats;

    if(isFetching) return <div className="loading">"Loading..."</div>

    return ( 
        <Section>
                <h2>DAILY STATS:</h2>
            <Marquee style={{display: "flex" , gap: "2rem"}} gradient={false}>
                <li>
                    <h3>Total Cryptocurrencies : <span>{globalStats.total}</span></h3>
                </li>
                <li>
                    <h3>Total Market Cap : <span>${millify(globalStats.totalMarketCap)}</span></h3>
                </li>
                <li>
                    <h3>Total Markets : <span>{millify(globalStats.totalMarkets)}</span></h3>
                </li>
                <li>
                    <h3>Total Exchanges : <span>{globalStats.totalExchanges}</span></h3>
                </li>
                <li>
                    <h3>Total 24h Volume : <span>${millify(globalStats.total24hVolume)}</span></h3>
                </li>
            </Marquee>
        </Section>
     );
}
 
export default Marqueee;