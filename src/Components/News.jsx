import styled from "styled-components";
import moment from "moment/moment";
import Avatar from '@mui/material/Avatar';
import {Select , Col} from "antd";


import { useGetCryptoNewsQuery } from "../Services/NewsApi";
// import { useGetCryptoDataQuery } from "../Services/CryptoApi";
const {Option} = Select;

const defaultImage = "https://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const News = ({simplified}) => {

    const Container = styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 1rem;
        /* border: 1px solid blue; */

        a {
            width: 29%;
            text-decoration: none;
            color: white;
            background: #2d2d2d;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            /* height: 35vh;
            min-height: 35vh; */
        }
    `

    const Card = styled.div`
        .news {
            display: flex;
            /* border: 1px solid blue; */
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
            /* border: 1px solid red; */
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

    const { data: cryptoNews } = useGetCryptoNewsQuery({newsCategory: "Cryptocurrency" , count: simplified ? 6 : 12});
    console.log(cryptoNews);
    if (!cryptoNews?.value) return <div>Loading..</div>

    return ( 
        <Container>
            {!simplified && (
                <div>
                    <Select>
                        <Option></Option>
                    </Select>
                </div>
            )}
            {cryptoNews.value.map((news , i) => (
                    <a href={news.url} target="_blank" rel="noreferrer">
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
        </Container>
     );
}
 
export default News;