import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import { useCoins } from "../../hooks/main/useCoins";
import mainRepository from "../../repository/main/main.repository";
import { MainContainer } from "./style";

const Main = () => {
  const { isLoading, data } = useCoins();

  console.log(data);

  return <MainContainer>{data?.map((item) => item.id)}</MainContainer>;
};

export default Main;

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
