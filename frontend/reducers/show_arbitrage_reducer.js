import { SHOW_ARBITRAGE, CHANGE_COIN_PAIR } from '../actions/change_coin_pair_actions';
import { merge } from 'lodash';

const showArbitrageReducer = (state = true, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SHOW_ARBITRAGE:
      return action.boolean;
    case CHANGE_COIN_PAIR:
      return false;
    default:
      return state;
  }
}

export default showArbitrageReducer;
