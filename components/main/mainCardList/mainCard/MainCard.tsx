import { Coin } from "../../../../types/common/common.type";
import {
  MainCardContainer,
  MainCardDetailButton,
  MainCardFavIcon,
  MainCardTitle,
  MainCardTitleWrap,
} from "./style";
import { FiArrowRight } from "@react-icons/all-files/fi/FiArrowRight";
import { FaRegStar } from "@react-icons/all-files/fa/FaRegStar";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import Link from "next/link";
import useFavorites from "../../../../hooks/main/useFavorites";
import { useRecoilValue } from "recoil";
import { mainFavoriteAtom } from "../../../../store/main/main.store";
import { useMemo, useState } from "react";

type Props = {
  data: Coin;
};

const MainCard = ({ data }: Props) => {
  const favorites = useRecoilValue(mainFavoriteAtom);
  const isPick = useMemo(() => {
    return favorites.find((prev) => prev === data.market) === undefined
      ? false
      : true;
  }, [data.market, favorites]);

  const [pick, setPick] = useState(isPick);

  const { handlePick } = useFavorites({ pick, setPick });

  return (
    <MainCardContainer>
      <MainCardTitleWrap>
        <MainCardTitle>
          {data.korean_name}({data.english_name})
        </MainCardTitle>
        <MainCardFavIcon onClick={() => handlePick(data.market)}>
          {pick ? <FaStar /> : <FaRegStar />}
        </MainCardFavIcon>
      </MainCardTitleWrap>
      <MainCardDetailButton>
        <Link href={`/coinDetail/${data.market}`}>
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
