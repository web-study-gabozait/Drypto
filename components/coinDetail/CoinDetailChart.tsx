import styled from "styled-components";
import { palette } from "../../styles/palette";
import { CoinTicker } from "../../types/common/common.type";
import { CoinDetailTopTitle } from "./style";
import dynamic from "next/dynamic";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = {
  coinTickersData: CoinTicker[];
};

const CoinDetailChart = ({ coinTickersData }: Props) => {
  return (
    <ChartWrap>
      <CoinDetailTopTitle>시가 차트</CoinDetailTopTitle>
      <ChartItem>
        <ApexCharts
          type="area"
          series={[
            {
              name: "시세",
              data: coinTickersData?.map((price) => price.prev_closing_price),
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
              categories: coinTickersData?.map(
                (price) => price.candle_date_time_utc
              ),
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
