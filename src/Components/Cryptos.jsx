import styled from "styled-components";
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptoDataQuery } from "../Services/CryptoApi";
import { useState , useEffect } from "react";
import searchIcon from "../Assets/search.svg";
import Marqueee from "./Marquee";

const Cryptos = ({simplified}) => {

    const Container = styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 1rem;
        margin: 1rem;
        background: #373943;
        border-radius: 10px;
        /* border: 1px solid red; */

        .link {
            text-decoration: none;
            color: white;
            width: 100%;
        }

        .currency {
            width: 32%;
            border-radius: 10px;
        }

        .currency:hover{
            transform: scale(1.01);
        }

        @media screen and (max-width: 768px) {
        justify-content: center ;

            .currency {
                width: 47%;
            }
        }
    `

    const Currency = styled.div`
        text-decoration: none;
        padding: 1rem;
        /* border-radius: 10px; */
        /* background: linear-gradient(273.78deg, #7A9EEF 8.84%, #1AC9EF 47.63%, #00F4F4 102.85%);
        background: rgba(187,75,164,1); */
        background: #272A34;
        border-radius: 5px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(3.8px);
        -webkit-backdrop-filter: blur(3.8px);
        border: 1px solid rgba(50, 50, 51, 0.3);

        img {
            height: 30px;
        }

        .CoinHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;
            font-weight: 700;
            /* color: #38F2AF; */

            p {
                font-size: 1.2rem;
                color: #38F2AF;
            }
        }

        p {
            line-height: 1.7rem;
            color: #828282;
        }
    `

    const count = simplified ? 10 : 100;
    const {data: cryptosList, isFetching} = useGetCryptoDataQuery(count);
    const [cryptos , setCryptos] = useState(cryptosList?.data?.coins);
    const [searchItem , setSearchItem] = useState("");

    useEffect(()=>{
        const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchItem));

        setCryptos(filteredData);
    }, [cryptosList, searchItem])
   
    return ( 
        <>
        {!simplified && (
            <Marqueee/>
        )}
        
        {!simplified && (
            <div className="search">
                <div>
                    <img src={searchIcon} alt="" />
                    <input type="text" placeholder="Search Cryptocurrency" onChange={(e) => setSearchItem(e.target.value)}/>
                </div>
            </div>
        )}
        
        <Container>
            {isFetching && <div>loading...</div>}
            {cryptos?.map((crypto) => (
                    <div key={crypto.id} className="currency">
                        <Link to={`/cryptos/${crypto.uuid}`} className="link">
                        <Currency>
                            <div className="CoinHeader">
                                <p>{`${crypto.rank}. ${crypto.name}`}</p>
                                <img src={crypto.iconUrl} alt="coin logo" />
                            </div>
                            <p>Live Price: ${crypto.price}</p>
                            <p>Market Cap: ${millify(crypto.marketCap)}</p>
                            <p>Daily Change: {millify(crypto.change)}%</p>
                        </Currency>
                        </Link>
                    </div>
            ))}
        </Container>
        </>
     );
}
 
export default Cryptos;