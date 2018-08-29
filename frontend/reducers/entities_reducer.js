import { combineReducers } from 'redux';
import exchangePricesPerCoinPairReducer from './exchange_prices_per_coin_pair_reducer';
import newsArticlesReducer from "./news_articles_reducer";
import coinPairReducer from "./coin_pair_reducer";

const entitiesReducer = combineReducers({
  exchangePricesPerCoinPair: exchangePricesPerCoinPairReducer,
  newsArticles: newsArticlesReducer,
  coinPair: coinPairReducer
});

export default entitiesReducer;
