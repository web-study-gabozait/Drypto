import { Coin } from "../../../../types/common/common.type";
import {
  MainCardContainer,
  MainCardDetailButton,
  MainCardTitle,
} from "./style";
import { FiArrowRight } from "@react-icons/all-files/fi/FiArrowRight";
import Link from "next/link";

type Props = {
  data: Coin;
};

const MainCard = ({ data }: Props) => {
  return (
    <MainCardContainer>
      <MainCardTitle>{data.name}</MainCardTitle>
      <MainCardDetailButton>
        <Link href="/coinDetail/222">
          <a>
            <p>자세히 보기</p>
          </a>
        </Link>
        <div>
          <FiArrowRight />
        </div>
      </MainCardDetailButton>
    </MainCardContainer>
  );
};

export default MainCard;
