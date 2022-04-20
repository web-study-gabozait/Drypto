import ApexCharts from "react-apexcharts";
import styled from "styled-components";
import { palette } from "../../styles/palette";
import { CoinHistorical } from "../../types/common/common.type";
import { CoinDetailTopTitle } from "./style";

type Props = {
  coinHistoricalData: CoinHistorical[];
};

const CoinDetailChart = ({ coinHistoricalData }: Props) => {
  return (
    <ChartWrap>
      <CoinDetailTopTitle>시세 차트</CoinDetailTopTitle>
      <ChartItem>
        <ApexCharts
          type="area"
          series={[
            {
              name: "시세",
              data: coinHistoricalData?.map((price) => price.market_cap),
            },
          ]}
          options={{
            stroke: {
              curve: "smooth",
              width: 3,
            },
            dataLabels: {
              enabled: false,
            },
            colors: [palette.main],
            xaxis: {
              type: "datetime",
              categories: coinHistoricalData?.map((price) => price.time_close),
              labels: {
                style: {
                  colors: "white",
                },
              },
            },
            yaxis: {
              show: false,
            },
            fill: {
              type: "gradient",
              gradient: {
                stops: [0, 90, 100],
              },
            },
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          }}
        />
      </ChartItem>
    </ChartWrap>
  );
};

export const ChartWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ChartItem = styled.div`
  width: 380px;
  height: 100%;
  height: 210px;
`;

export default CoinDetailChart;
