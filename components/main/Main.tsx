import styled from "styled-components";
import { Coin } from "../../types/common/common.type";
import MainCardList from "./mainCardList/MainCardList";
import MainFavoriteCardList from "./mainFavoriteCardList/MainFavoriteCardList";
import MainNewsList from "./mainNewsList/MainNewsList";
import { MainContainer } from "./style";

type Props = {
  data: Coin[] | null;
};

const Main = ({ data }: Props) => {
  return (
    <MainContainer>
      <Column>
        <MainCardList data={data} />
      </Column>
      <Column>
        <MainFavoriteCardList data={data} />
        <MainNewsList />
      </Column>
    </MainContainer>
  );
};

export default Main;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
