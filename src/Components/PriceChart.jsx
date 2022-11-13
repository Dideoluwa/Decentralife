import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

// Line.register(CategoryScale);

const Container = styled.div`

    .chart-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
`

const PriceChart = ({coinHistory , currentPrice, coinName}) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
      };
    
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
      };

      console.log(coinPrice)
      console.log(coinTimestamp)

    const data = {
        labels: coinTimestamp,
        datasets: [
          {
            label: 'Price In USD',
            data: coinPrice,
            fill: false,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
          },
        ],
      };
    
    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            }],
        },
      };



    return ( 
        <Container>
            <div className="chart-header">
                <h2 className="price-container">{coinName} Price Chart</h2>
                <div>
                    <h5 className="price-change">Change: {coinHistory?.data?.change}%</h5>
                    <h5 className="current-price">Current {coinName} Price: ${currentPrice}</h5>
                </div>
            </div>
            <Line data={data} options={options} />
        </Container>
     );
}
 
export default PriceChart;