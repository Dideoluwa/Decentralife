import styled from "styled-components";
import { useGetExchangesQuery } from "../Services/CryptoApi";
import millify from "millify";


const Exchanges = () => {

    const Container = styled.div`
    color: white;
    padding: 2rem;
    display: flex;
    justify-content: center;
    
    table {
    width: 80vw;
    border-collapse: collapse;
    }

    th , td{
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: rgba(187,75,164,1);
    color: black;
    text-align: center;}

    td {
        background-color: black;
        color: rgb(87, 80, 80);
        font-weight: 600;
    }
    `

    const { data, isFetching } = useGetExchangesQuery();
    const exchangesList = data?.data?.exchanges;
    console.log(exchangesList);

    if (isFetching) return "Loading..."

    return ( 
        <Container>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Exchanges</th>
      <th scope="col">24h Trade Volume</th>
      <th scope="col">Markets</th>
      <th scope="col">Change</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Binance</td>
      <td>144B</td>
      <td>1.2k</td>
      <td>20%</td>
    </tr>
    {exchangesList.map((exchange) => (
        <tr key={exchange.uuid}>
        <td>{exchange.rank}.</td>
        <td>{exchange.name}</td>
        <td>${millify(exchange.volume)}</td>
        <td>{millify(exchange.numberOfMarkets)}</td>
        <td>{millify(exchange.marketShare)}%</td>
      </tr>
    ))}
  </tbody>
</table>
        </Container>
     );
}
 
export default Exchanges;