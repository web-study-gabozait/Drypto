import { CoinDetail, CoinTicker } from "../common/common.type";

export type CoinResponse = Response & CoinDetail;

export type CoinTickersResponse = Response & CoinTicker[];
