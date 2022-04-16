import { Coin } from "../../../../types/common/common.type";
import {
  MainCardContainer,
  MainCardDetailButton,
  MainCardTitle,
} from "./style";
import { FiArrowRight } from "@react-icons/all-files/fi/FiArrowRight";

type Props = {
  data: Coin;
};

const MainCard = ({ data }: Props) => {
  return (
    <MainCardContainer>
      <MainCardTitle>{data.name}</MainCardTitle>
      <MainCardDetailButton>
        <p>자세히 보기</p>
        <div>
          <FiArrowRight />
        </div>
      </MainCardDetailButton>
    </MainCardContainer>
  );
};

export default MainCard;
