import ApexCharts from "react-apexcharts";
import { palette } from "../../styles/palette";
import { CoinTicker } from "../../types/common/common.type";

type Props = {
  coinTickersData: CoinTicker[];
};

const CoinDetailBarChart = ({ coinTickersData }: Props) => {
  return (
    <div>
      <ApexCharts type={"bar"} />
    </div>
  );
};

export default CoinDetailBarChart;
