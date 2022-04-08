import { Coin } from "../../../../types/common/common.type";
import { MainCardContainer, MainCardTitle } from "./style";

type Props = {
  data: Coin;
};

const MainCard = ({ data }: Props) => {
  return (
    <MainCardContainer>
      <MainCardTitle>{data.name}</MainCardTitle>
    </MainCardContainer>
  );
};

export default MainCard;
