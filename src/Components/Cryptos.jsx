import styled from "styled-components";
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptoDataQuery } from "../Services/CryptoApi";
import { useState } from "react";

const Cryptos = ({simplified}) => {

    const Container = styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 1rem;

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
            transform: scale(1.05);
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
        border-radius: 10px;
        background: linear-gradient(273.78deg, #7A9EEF 8.84%, #B8479F 47.63%, #BB4BA4 47.65%, #F495FB 102.85%);

        img {
            height: 30px;
        }

        .CoinHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;
            font-weight: 700;
        }
    `

    const count = simplified ? 10 : 100;
    const {data: cryptosList, isFetching} = useGetCryptoDataQuery(count);
    const [cryptos , setCryptos] = useState(cryptosList?.data?.coins);
   
    if(isFetching) return <div>loading...</div>

    return ( 
        <Container>
            {cryptos?.map((crypto) => (
                    <div key={crypto.id} className="currency">
                        <Link to={`/cryptos/${crypto.uuid}`} className="link">
                        <Currency>
                            <div className="CoinHeader">
                                <p>{`${crypto.rank}. ${crypto.name}`}</p>
                                <img src={crypto.iconUrl} alt="coin logo" />
                            </div>
                            <p>Price: {crypto.price}</p>
                            <p>Market Cap: {millify(crypto.marketCap)}</p>
                            <p>Daily Change: {millify(crypto.change)}%</p>
                        </Currency>
                        </Link>
                    </div>
            )
            )}
        </Container>
     );
}
 
export default Cryptos;