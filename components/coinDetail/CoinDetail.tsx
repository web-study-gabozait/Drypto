import { CoinDetail as CoinDetailType } from "../../types/common/common.type";

type Props = {
  data: CoinDetailType | null;
};

const CoinDetail = ({ data }: Props) => {
  return (
    <div>
      {data !== null && (
        <>
          <div>{data.id}</div>
          <div>{data.name}</div>
          <div>{data.rank}</div>
        </>
      )}
    </div>
  );
};

export default CoinDetail;
