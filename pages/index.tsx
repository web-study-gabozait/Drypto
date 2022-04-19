import type { NextPage } from "next";
import Head from "next/head";
import Main from "../components/main/Main";
import useCoins from "../hooks/main/useCoins";
import toast from "../lib/toast";
import mainRepository from "../repository/main/main.repository";
import { Coin } from "../types/common/common.type";

type Props = {
  isClient: boolean;
  coinsData: Coin[] | null;
  title: string;
};

const Home: NextPage<Props> = ({ isClient, coinsData, title }) => {
  const { data } = useCoins(isClient);

  return (
    <div>
      <Head>
        <title>{"Drypto"}</title>
        <meta
          name="description"
          content="Drypto는 자기가 관심있어하는 비트코인을 조회하고, 분석해보는 사이트 입니다."
        />
        <meta property="og:title" content={title ? title : "Drypto"} />
        <meta
          property="og:description"
          content="Drypto는 자기가 관심있어하는 비트코인을 조회하고, 분석해보는 사이트 입니다."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Drypto" />
        <meta
          property="twitter:description"
          content="Drypto는 자기가 관심있어하는 비트코인을 조회하고, 분석해보는 사이트 입니다."
        />
      </Head>
      {isClient ? <Main data={data} /> : <Main data={coinsData} />}
    </div>
  );
};

Home.getInitialProps = async () => {
  const isServer = typeof window === "undefined";

  const getCoinsInfo = async () => {
    try {
      const data = await mainRepository.getCoins();
      return data;
    } catch (error) {
      toast.error("코인정보 불러오기 실패");
      return null;
    }
  };

  if (isServer) {
    const coinsData = await getCoinsInfo();

    return {
      coinsData,
      isClient: false,
      title: "Drypto Main",
    };
  } else {
    return {
      coinsData: null,
      isClient: true,
      title: "Drypto Main",
    };
  }
};

export default Home;
