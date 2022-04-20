import { CoinDetail, CoinHistorical, CoinTicker } from "../common/common.type";

export type CoinResponse = Response & CoinDetail;

export type CoinTickerResponse = Response & CoinTicker;

export type CoinHistoricalResponse = Response & CoinHistorical[];
