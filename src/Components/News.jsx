import styled from "styled-components";
import moment from "moment/moment";

import { useGetCryptoNewsQuery } from "../Services/NewsApi";

const News = ({simplified}) => {

    const Container = styled.div`
        color: white;
    `

    const { data: cryptoNews } = useGetCryptoNewsQuery({newsCategory: "Cryptocurrency" , count: simplified ? 10 : 100})

    console.log(cryptoNews);

    return ( 
        <Container>
            news
        </Container>
     );
}
 
export default News;