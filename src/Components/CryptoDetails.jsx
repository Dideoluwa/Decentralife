import millify from "millify";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import { useState } from "react";
import styled from "styled-components";

import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import {useGetCryptoDetailsQuery} from "../Services/CryptoApi";

const CryptoDetails = () => {
    const {coinId} = useParams();
    const [timePeriod , setTimePeriod] = useState('7d');
    const {data , isFetching} = useGetCryptoDetailsQuery(coinId);
    const cryptoDetails = data?.data?.coin;

    const Container = styled.div`
        color: white;

        header {
            text-align: center;
            padding: 1.5rem;
        }

        .period {
            padding: 1rem;
        }

        .timeframe {
            border: 2px solid rgba(187,75,164,1);
            width: 35vh;
            padding: 0.3rem;
            outline: none;
            color: white;
            background: transparent;

            option {
            color: white;
            background: #111111;
            }
        }
    `;

    const StatsContainer = styled.div`
        padding: 1rem;

        .coin_stats_heading {
            text-align: center;
            margin-bottom: 2rem;
        }

        .coin_stats_details {
            width: 40%;
        }

        .coin_stats {
            border-bottom: .5px solid #CCC;
            display: flex;
            align-items: center;
            padding: 1rem;
            justify-content: space-between;
        }

        .stats {
            display: flex;
            align-items: center;
            gap: 5px;

            .stats_value {
                font-weight: 700;
            }
        }
    `;

    if (isFetching) return <div>fetching...</div>

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    const stats = [
      { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined/> },
      { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined/> },
      { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <ThunderboltOutlined/> },
      { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined/> },
      { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined/> }
    ];
  
    const genericStats = [
      { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined/> },
      { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
      { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined/> : <StopOutlined/>, icon: <ExclamationCircleOutlined/> },
      { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined/> },
      { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined/> }
    ];

    return ( 
        <Container>
            <header>
                <h1>{cryptoDetails.name} ({cryptoDetails.symbol}) Price</h1>
                <p>{cryptoDetails.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
            </header>
            <div className="period">
                <select class="form-select timeframe">
                {time.map((date) => <option key={date}>{date}</option>)}
                </select>
            </div>
            <StatsContainer>
                <div className="coin_value">
                    <div className="coin_stats_heading">
                        <h2>{cryptoDetails.name} Value Statistics</h2>
                        <p>An overview showing the stats of {cryptoDetails.name}</p>
                    </div>
                    <div className="coin_stats_details"> 
                        {stats.map(({icon , title, value}) => (
                            <div className="coin_stats">
                                <div className="stats">
                                    <div>{icon}</div>
                                    <p>{title}</p>
                                </div>
                                <p className="stats_value">{value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </StatsContainer>
        </Container>   
     );
}
 
export default CryptoDetails;