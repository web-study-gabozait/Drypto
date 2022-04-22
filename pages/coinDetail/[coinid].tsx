import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import CoinDetail from "../../components/coinDetail/CoinDetail";
import { COIN_TICKERS_START_DATE } from "../../constants/product.constants";
import useCoin from "../../hooks/coinDetail/useCoin";
import toast from "../../lib/toast";
import coinDetailRepository from "../../repository/coinDetail/coinDetail.repository";
import {
  CoinDetail as CoinDetailType,
  CoinTicker as CoinTickerType,
} from "../../types/common/common.type";

type Props = {
  isClient: boolean;
  ssrCoinDetailData: CoinDetailType | null;
  ssrCoinTickersData: CoinTickerType[] | null;
};

const CoinDetailPage: NextPage<Props> = ({
  isClient,
  ssrCoinDetailData,
  ssrCoinTickersData,
}) => {
  const {
    query: { coinid },
  } = useRouter();

  const { coinDetailData, coinTickersData } = useCoin({
    coinid: coinid as string,
    isClient,
  });

  return (
    <div>
      <Head>
        <title>{`Dtypto ${
          ssrCoinDetailData ? ssrCoinDetailData.market : "Coin"
        }`}</title>
        <meta
          name="description"
          content={
            ssrCoinDetailData
              ? `${ssrCoinDetailData.market}코인의 상세정보 사이트 입니다.`
              : `코인 상세정보 사이트 입니다.`
          }
        />
        <meta
          property="og:title"
          content={ssrCoinDetailData ? ssrCoinDetailData.market : "Coin"}
        />
        <meta
          property="og:description"
          content={
            ssrCoinDetailData
              ? `${ssrCoinDetailData.market}코인의 상세정보 사이트 입니다.`
              : `코인 상세정보 사이트 입니다.`
          }
        />
      </Head>
      {isClient ? (
        <CoinDetail
          coinDetailData={coinDetailData!}
          coinTickersData={coinTickersData!}
        />
      ) : (
        <CoinDetail
          coinDetailData={ssrCoinDetailData}
          coinTickersData={ssrCoinTickersData}
        />
      )}
    </div>
  );
};

CoinDetailPage.getInitialProps = async ({ query: { coinid } }) => {
  const isServer = typeof window === "undefined";

  const getCoinDetailData = async (coinid: string) => {
    try {
      const data = await coinDetailRepository.getCoin({ coinid });
      return data;
    } catch (error) {
      toast.error("코인 상세거래내역 불러오기 실패");
      return null;
    }
  };

  const getCoinTickersData = async (coinid: string, startDate: string) => {
    try {
      const data = await coinDetailRepository.getCoinTickers({
        coinid,
        startDate,
      });

      return data;
    } catch (error) {
      toast.error("코인 상세시세 불러오기 실패");
      return null;
    }
  };

  if (isServer) {
    const ssrCoinDetailData = await getCoinDetailData(coinid as string);

    const ssrCoinTickersData = await getCoinTickersData(
      coinid as string,
      COIN_TICKERS_START_DATE
    );

    return {
      isClient: false,
      ssrCoinDetailData,
      ssrCoinTickersData,
    };
  } else {
    return {
      isClient: true,
      ssrCoinDetailData: null,
      ssrCoinTickersData: null,
    };
  }
};

export default CoinDetailPage;
