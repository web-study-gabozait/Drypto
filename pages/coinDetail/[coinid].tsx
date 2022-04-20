import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import CoinDetail from "../../components/coinDetail/CoinDetail";
import useCoin from "../../hooks/coinDetail/useCoin";
import toast from "../../lib/toast";
import coinDetailRepository from "../../repository/coinDetail/coinDetail.repository";
import {
  CoinDetail as CoinDetailType,
  CoinHistorical,
  CoinTicker as CoinTickerType,
} from "../../types/common/common.type";

type Props = {
  isClient: boolean;
  ssrCoinDetailData: CoinDetailType | null;
  ssrCoinTickerData: CoinTickerType | null;
  ssrCoinHistoricalData: CoinHistorical[] | null;
};

const CoinDetailPage: NextPage<Props> = ({
  isClient,
  ssrCoinDetailData,
  ssrCoinTickerData,
  ssrCoinHistoricalData,
}) => {
  const {
    query: { coinid },
  } = useRouter();

  const { coinDetailData, coinTickerData, coinHistoricalData } = useCoin({
    coinid: coinid as string,
    isClient,
  });

  return (
    <div>
      <Head>
        <title>{`Dtypto ${
          ssrCoinDetailData ? ssrCoinDetailData.name : "Coin"
        }`}</title>
        <meta
          name="description"
          content={
            ssrCoinDetailData
              ? `${ssrCoinDetailData.name}코인의 상세정보 사이트 입니다.`
              : `코인 상세정보 사이트 입니다.`
          }
        />
        <meta
          property="og:title"
          content={ssrCoinDetailData ? ssrCoinDetailData.name : "Coin"}
        />
        <meta
          property="og:description"
          content={
            ssrCoinDetailData
              ? `${ssrCoinDetailData.name}코인의 상세정보 사이트 입니다.`
              : `코인 상세정보 사이트 입니다.`
          }
        />
      </Head>
      {isClient ? (
        <CoinDetail
          coinDetailData={coinDetailData!}
          coinTickerData={coinTickerData!}
          coinHistoricalData={coinHistoricalData!}
        />
      ) : (
        <CoinDetail
          coinDetailData={ssrCoinDetailData}
          coinTickerData={ssrCoinTickerData}
          coinHistoricalData={ssrCoinHistoricalData}
        />
      )}
    </div>
  );
};

CoinDetailPage.getInitialProps = async ({ query: { coinid } }) => {
  const isServer = typeof window === "undefined";

  const getCoinDetailInfo = async (coinid: string) => {
    try {
      const data = await coinDetailRepository.getCoin({ coinid });
      return data;
    } catch (error) {
      toast.error("코인 상세정보 불러오기 실패");
      return null;
    }
  };

  const getCoinTickerInfo = async (coinid: string) => {
    try {
      const data = await coinDetailRepository.getCoinTickers({ coinid });
      return data;
    } catch (error) {
      toast.error("코인 상세거래내역 불러오기 실패");
      return null;
    }
  };

  const getCoinHistoricalInfo = async (
    coinid: string,
    endDate: string,
    startDate: string
  ) => {
    try {
      const data = await coinDetailRepository.getCoinHistorical({
        coinid,
        endDate,
        startDate,
      });

      return data;
    } catch (error) {
      toast.error("코인 상세시세 불러오기 실패");
      return null;
    }
  };

  if (isServer) {
    const coinDetailData = await getCoinDetailInfo(coinid as string);
    const coinTickerData = await getCoinTickerInfo(coinid as string);

    const endDate = Math.floor(Date.now() / 1000);
    const startDate = endDate - 60 * 60 * 24 * 7 * 2;

    const coinHistorical = await getCoinHistoricalInfo(
      coinid as string,
      String(endDate),
      String(startDate)
    );

    return {
      isClient: false,
      ssrCoinDetailData: coinDetailData,
      ssrCoinTickerData: coinTickerData,
      ssrCoinHistoricalData: coinHistorical,
    };
  } else {
    return {
      isClient: true,
      ssrCoinDetailData: null,
      ssrCoinTickerData: null,
      ssrCoinHistoricalData: null,
    };
  }
};

export default CoinDetailPage;
