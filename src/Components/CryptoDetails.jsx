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
    }
    `

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
        </Container>
     );
}
 
export default CryptoDetails;