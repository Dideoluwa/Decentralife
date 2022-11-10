import styled from "styled-components";

const Container = styled.div`

    .chart-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
`

const PriceChart = ({coinHistory , currentPrice, coinName}) => {
    return ( 
        <Container>
            <div className="chart-header">
                <h2 className="price-container">{coinName} Price Chart</h2>
                <div>
                    <h5 className="price-change">Change: {coinHistory?.data?.change}%</h5>
                    <h5 className="current-price">Current {coinName} Price: ${currentPrice}</h5>
                </div>
            </div>
        </Container>
     );
}
 
export default PriceChart;