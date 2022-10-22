import styled from "styled-components";
import moment from "moment/moment";
import Avatar from '@mui/material/Avatar';
import {Select , Col} from "antd";
import { useState } from "react";


import { useGetCryptoNewsQuery } from "../Services/NewsApi";
import { useGetCryptoDataQuery } from "../Services/CryptoApi";
const {Option} = Select;

const defaultImage = "https://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const News = ({simplified}) => {

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 1rem;

        a {
            width: 29%;
            text-decoration: none;
            color: white;
            background: #2d2d2d;
            padding: 1rem;
            display: flex;
            flex-direction: column;
        }

        .optionField {
            /* border: 1px solid red; */
        }

        .newsList {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            padding: 1rem;
        }
    `

    const Card = styled.div`
        .news {
            display: flex;
            margin-bottom: .7rem;
            h1 {
                font-size: 1rem;
            }
            img {
                height: 100px;
                width: 100px;
                max-width: 100px;
                max-height: 100px;
            }
        }

        p {
            font-size: .8rem;
        }

        .provider { 
            display: flex;
            align-items: center;
            margin-top: 1rem;
        }

        .avatar {
                width: 25px;
                height: 25px;
                margin-right: .5rem;
        }

        .datePublished {
            margin-left: auto;
            font-weight: 700;
        }
    `

    const [newsCategory, setNewsCategory] = useState("Cryptocurrency")
    const { data: cryptoNews } = useGetCryptoNewsQuery({newsCategory , count: simplified ? 6 : 12});
    const {data} = useGetCryptoDataQuery(100);
    if (!cryptoNews?.value) return <div>Loading..</div>

    return ( 
        <Container>
            {!simplified && (
                <div className="optionField">
                    <select
                        showSearch
                        className="selectNews"
                        placeholder="Select a Crypto"
                        optionFilterProp="children"
                        onChange={(value)=> setNewsCategory(value)}
                        filterOption={(input , option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <option value="Cryptocurrency">Cryptocurrency</option>
                        {data?.data?.coins.map((coin) => <option value={coin.name}>{coin.name}</option>)}
                    </select>
                </div>
            )}
            <div className="newsList">
            {cryptoNews.value.map((news , i) => (
                    <a href={news.url} target="_blank" rel="noreferrer" key={news.id}>
                        <Card>
                            <div className="news">
                                <h1>{news.name}</h1>
                                <img src={news?.image?.thumbnail?.contentUrl || defaultImage} alt="News Image" />
                            </div>
                            <p>{news.description > 100 ? `${news.description.substring(0 , 100)}...` : news.description}</p>
                            <div className="provider">
                            <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl} className="avatar"/>
                            <p>{news.provider[0]?.name}</p>
                            <p className="datePublished">{moment(news.datePublished).startOf("ss").fromNow()}</p>
                            </div>
                        </Card>
                    </a>    
            ))}
            </div>
        </Container>
     );
}
 
export default News;