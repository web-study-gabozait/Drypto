import Link from "next/link";
import { Coin } from "../../../../types/common/common.type";
import {
  MainFavCardContainer,
  MainFavCardIcon,
  MAinFavCardRedirectButton,
  MainFavCardTitle,
} from "./style";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

type Props = {
  data: Coin;
};

const MainFavoriteCard = ({ data }: Props) => {
  const imgSrc = data.market.split("-")[1].toLowerCase();

  return (
    <Link href={`/coinDetail/${data.market}`}>
      <a>
        <MainFavCardContainer>
          <MainFavCardIcon
            src={`https://cryptoicons.org/api/icon/${imgSrc}/25`}
            alt={`favorite coin ${imgSrc} image`}
          />
          <MainFavCardTitle>
            {data.korean_name}({data.english_name})
          </MainFavCardTitle>
          <MAinFavCardRedirectButton>
            <Link href={`/coinDetail/${data.market}`}>
              <a>
                <p>자세히 보기</p>
              </a>
            </Link>
            <div>
              <FiArrowRight />
            </div>
          </MAinFavCardRedirectButton>
        </MainFavCardContainer>
      </a>
    </Link>
  );
};
export default React.memo(MainFavoriteCard);
