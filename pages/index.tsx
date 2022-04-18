import type { NextPage } from "next";
import Head from "next/head";
import Main from "../components/main/Main";
import mainRepository from "../repository/main/main.repository";
import { Coin } from "../types/common/common.type";

type Props = {
  isClient: boolean;
  coinsData: Coin[] | null;
};

const Home: NextPage<Props> = ({ isClient, coinsData }) => {
  return (
    <div>
      <Head>
        <title>{"Drypto"}</title>
        <meta
          name="description"
          content="자기가 관심있어하는 비트코인을 조회 해보세요."
        />
      </Head>
      <Main />
    </div>
  );
};

Home.getInitialProps = async ({ req }) => {
  const isServer = typeof window === "undefined";

  const getCoinsInfo = async () => {
    try {
      const data = await mainRepository.getCoins();
      return data;
    } catch (error) {
      return null;
    }
  };

  if (isServer) {
    const coinsData = await getCoinsInfo();

    return {
      coinsData,
      isClient: false,
    };
  } else {
    return {
      coinsData: null,
      isClient: true,
    };
  }
};

export default Home;
