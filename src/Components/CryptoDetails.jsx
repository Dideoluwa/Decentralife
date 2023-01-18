import millify from "millify";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import { useState } from "react";
import styled from "styled-components";
import PriceChart from "./PriceChart";

import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import {useGetCryptoDetailsQuery , useGetCryptoHistoryQuery} from "../Services/CryptoApi";

import { Select } from "antd";
const { Option } = Select;

const CryptoDetails = () => {
    const {coinId} = useParams();
    const [timePeriod , setTimePeriod] = useState('7d');
    const {data, isFetching} = useGetCryptoDetailsQuery(coinId);
    const {data : coinHistory} = useGetCryptoHistoryQuery({coinId , timePeriod});
    const cryptoDetails = data?.data?.coin;
    // console.log(cryptoDetails);

    const Container = styled.div`
        color: white;

        header {
            text-align: center;
            padding: 1rem;

            h1 {
                color: #38F2AF;
            }

            p {
                /* color: #38F2AF; */
            }
        }

        .period {
            padding: 1rem;

            select {
                margin-bottom: 2rem;
            }
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
        display: flex;
        justify-content: space-between;

        .coin_value {
            width: 45%;
        }

        .coin_stats_heading {
            /* text-align: center; */
            margin-bottom: 2rem;
        }

        .coin_stats_details {
            /* width: 40%; */
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
                font-weight: 800;
            }
        }
    `;

    const AboutCountainer = styled.div`
        padding: 0 1rem;
        /* display: flex; */
        /* justify-content: space-between; */
        /* border: 1px solid red; */

        .description{
            width: 100%;
            p {
                margin-top: 10px;
                margin-bottom: 1rem;
            }

            h3 {
                font-size: 1.5rem;
            }
        }

        .links {
            width: 35%;

            ul {
                list-style: none;
                margin-top: 1rem;
            }

            li {
                display: flex;
                padding: 1rem;
                justify-content: space-between;
                border-bottom: 1px solid ;

                p {
                    text-transform: uppercase ;
                }

                a {
                    color: #38F2AF;
                    text-decoration: none;
                    text-transform: lowercase;
                }
            }
        }
    `

    if (isFetching) return <div>fetching...</div>

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    const stats = [
      { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined/> },
      { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined/> },
      { title: '24h Volume', value: `$ ${cryptoDetails?.total24hVolume && millify(cryptoDetails?.total24hVolume)}`, icon: <ThunderboltOutlined/> },
      { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined/> },
      { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined/> }
    ];
  
    const genericStats = [
      { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined/> },
      { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
      { title: 'Aproved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined/> : <StopOutlined/>, icon: <ExclamationCircleOutlined/> },
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
                {/* <select className="form-select timeframe" onChange={(value) => setTimePeriod(value)}>
                {time.map((date) => <option key={date}>{date}</option>)}
                </select> */}
                {/* <Select defaultValue="7d" className="select-timeperiod" placeholder="Select Timeperiod" onChange={(value) => setTimePeriod(value)}>
        {time.map((date) => <Option key={date}>{date}</Option>)}
      </Select> */}
                {/* <PriceChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name}/> */}
            </div>
            <AboutCountainer>
                <div className="description">
                    <h3>What is {cryptoDetails.name}?</h3>
                    {HTMLReactParser(cryptoDetails.description)}
                </div>

                <div className="links">
                    <h2>{cryptoDetails.name} Links</h2>
                    <ul>
                    {cryptoDetails.links.map((link) => (
                        <li>
                            <p>{link.type}</p>
                            <a href={link.url}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                    </ul>
                </div>
            </AboutCountainer>
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
                <div className="coin_value">
                    <div className="coin_stats_heading">
                        <h2>Other Statistics</h2>
                        <p>An overview of other stats</p>
                    </div>
                    <div className="coin_stats_details"> 
                        {genericStats.map(({icon , title, value}) => (
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