import styled from "styled-components";
import moment from "moment/moment";
import Avatar from "@mui/material/Avatar";
// import {Select , Col} from "antd";
import { Select } from "antd";
import { useState } from "react";
import Marqueee from "./Marquee";

import { useGetCryptoNewsQuery } from "../Services/NewsApi";
import { useGetCryptoDataQuery } from "../Services/CryptoApi";
const { Option } = Select;

const defaultImage =
  "https://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const News = ({ simplified }) => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;

    a {
      width: 29.5%;
      max-width: 30%;
      text-decoration: none;
      color: white;
      background: #2d2d2d;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      border-radius: 5px;
      background: #272a34;
    }

    .optionField {
      margin-top: 4rem;
    }

    .newsList {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      padding: 1rem;
      background: #373943;
      border-radius: 10px;
      /* margin: 1rem; */
    }
  `;

  const Card = styled.div`
    /* border: 1px solid blue; */
    .news {
      display: flex;
      gap: 0.2rem;
      /* border: 1px solid red; */
      margin-bottom: 0.7rem;
      h1 {
        font-size: 1rem;
        font-family: "Inter", sans-serif;
        /* border: 1px solid blue; */
        height: 100px;
        overflow: clip;
        /* overflow: ; */
        /* color: #38F2AF; */
      }
      img {
        height: 100px;
        width: 100px;
        /* max-width: 100px;
                max-height: 100px; */
        border-radius: 10px;
      }
    }

    > p {
      font-size: 0.8rem;
      font-family: "Inter", sans-serif;
      /* border: 1px solid red; */
      height: 4rem;
      text-overflow: hidden;
    }

    .provider {
      display: flex;
      align-items: center;
      margin-top: 1rem;
      color: #38f2af;
    }

    .avatar {
      width: 25px;
      height: 25px;
      margin-right: 0.5rem;
    }

    .datePublished {
      margin-left: auto;
      font-weight: 700;
      color: white;
      color: #828282;
    }
  `;

  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });
  const { data } = useGetCryptoDataQuery(100);
  if (!cryptoNews?.value) return <div>Loading..</div>;

  return (
    <Container>
      {!simplified && <Marqueee />}
      {!simplified && (
        <div className="optionField">
          <Select
            showSearch
            className="selectNews"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin) => (
              <option value={coin.name}>{coin.name}</option>
            ))}
          </Select>
          {/* <select className="form-select timeframe"
                        optionFilterProp="children"
                        onChange={(value)=> setNewsCategory(value)}
                        filterOption={(input , option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                {data?.data?.coins.map((coin) => <option value={coin.name} key={coin.name}>{coin.name}</option>)}
                </select> */}
        </div>
      )}
      <div className="newsList">
        {cryptoNews.value.map((news, i) => (
          <a href={news.url} target="_blank" rel="noreferrer" key={news.id}>
            <Card>
              <div className="news">
                <h1>{news.name}</h1>
                <img
                  src={news?.image?.thumbnail?.contentUrl || defaultImage}
                  alt="News"
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider">
                <Avatar
                  src={news.provider[0]?.image?.thumbnail?.contentUrl}
                  className="avatar"
                />
                <p>{news.provider[0]?.name}</p>
                <p className="datePublished">
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </p>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </Container>
  );
};

export default News;
