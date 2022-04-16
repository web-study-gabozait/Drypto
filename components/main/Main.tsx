import { GetServerSideProps, NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import { useCoins } from "../../hooks/main/useCoins";
import mainRepository from "../../repository/main/main.repository";
import MainCardList from "./mainCardList/MainCardList";
import { MainContainer } from "./style";

const Main: NextPage = () => {
  const { isLoading, data } = useCoins();

  return (
    <MainContainer>
      <MainCardList data={data ? data : null} />
    </MainContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "coinsList",
    () => mainRepository.getCoins(),
    { staleTime: 10000, cacheTime: 10000 }
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Main;
