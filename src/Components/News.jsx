import styled from "styled-components";
import moment from "moment/moment";
import { Link } from "react-router-dom";

import { useGetCryptoNewsQuery } from "../Services/NewsApi";

const defaultImage = "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const News = ({simplified}) => {

    const Container = styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 1rem;

        a {
            width: 32%;
            text-decoration: none;
            color: white;
            background: #2d2d2d;
        }
    `

    const Card = styled.div`
        /* height: 20vh; */
        padding: 1rem;

        .news {
            display: flex;
            margin-bottom: 1rem;
            h1 {
                font-size: 1rem;
            }
        }

        p {
            font-size: .8rem;
        }
    `

    const { data: cryptoNews } = useGetCryptoNewsQuery({newsCategory: "Cryptocurrency" , count: simplified ? 6 : 12});
    console.log(cryptoNews);
    if (!cryptoNews?.value) return <div>Loading..</div>

    return ( 
        <Container>
            {cryptoNews.value.map((news , i) => (
                    <a href={news.url} target="_blank" rel="noreferrer">
                        <Card>
                            <div className="news">
                                <h1>{news.name}</h1>
                                <img src={news?.image?.thumbnail?.contentUrl || defaultImage} alt="News Image" />
                            </div>
                            <p>{news.description > 100 ? `${news.description.substring(0 , 100)}...` : news.description}</p>
                        </Card>
                    </a>    
            ))}
        </Container>
     );
}
 
export default News;