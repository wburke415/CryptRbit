export const CHANGE_COIN_PAIR = "CHANGE_COIN_PAIR";
export const SHOW_ARBITRAGE = "SHOW_ARBITRAGE";

const receiveCoinPair = (fsym, tsym) => ({
  type: CHANGE_COIN_PAIR,
  fsym,
  tsym
})

export const changeCoinPair = (fsym, tsym) => dispatch => {
  dispatch(receiveCoinPair(fsym, tsym));
}

export const showArbitrage = boolean => ({
  type: SHOW_ARBITRAGE,
  boolean
});
