import { CoinHistorical } from "../../types/common/common.type";
import ApexCharts from "react-apexcharts";
import { palette } from "../../styles/palette";

type Props = {
  coinHistoricalData: CoinHistorical[];
};

const CoinDetailBarChart = ({ coinHistoricalData }: Props) => {
  return (
    <div>
      <ApexCharts type={"bar"} />
    </div>
  );
};

export default CoinDetailBarChart;
