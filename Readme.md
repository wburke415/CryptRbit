# CryptRbit

### CryptRbit is a project aiming to display analysis on live cryptocurrency data

[Live Site](http://cryptrbit.com/#/)

## Background and Overview

CryptRbit performs real-time financial analyses of the global cryptocurrency market to identify arbitrage trading opportunities. Cryptocurrency exchanges have proliferated rapidly across the globe, and large price discrepancies develop quickly as news, policy, and technology updates emerge, creating ideal trading opportunities. The act of exploiting the pricing inefficiencies will correct the pricing discrepancy itself, so traders must be ready to act swiftly in the case with arbitrage strategies. For this reason, these opportunities are often around for a very short time. Arbitrage currency trading requires the availability of real-time pricing quotes and the ability to act fast on opportunities, so having a live updating arbitrage calculator that pools data from across the global exchange space will be the goal of this app.

## Features

* Secure user authentication using BCrypt and json web tokens.
* Bar graph that displays top arbitrage opportunities across markets, or prices for a given coin depending upon user input.
* Pie chart displaying exchange prices for a given coin pair across markets.
* News feed that displays news recent news articles with filters for news sources and categories.
* Modal for saving user preferences to set default displays upon page load.

## Finding Arbitrage Opportunities

![graph_snippet](/graph_snippet.png)

```javascript
findArbitrageOpportunities() {
    const opportunities = {};

    for (let i = 0; i < Object.keys(this.props.data).length; i++) {
      let coin = Object.keys(this.props.data)[i];
      if (!coin || COINS_BLACKLIST.includes(coin)) continue;

      let coinValues = {};
      this.props.data[coin].forEach(exchange => {
        if (EXCHANGES_BLACKLIST.includes(exchange.MARKET)) return;
        if (COIN_EXCHANGE_PAIR_BLACKLIST.includes([exchange.FROMSYMBOL, exchange.MARKET])) return;
        coinValues[exchange.MARKET] = exchange.PRICE;
      });

      let opportunity = {}
      for (let j = 0; j < Object.keys(coinValues).length; j++) {
        let exchange = Object.keys(coinValues)[j];

        if (j === 0) {
          opportunity.min = {[exchange]: coinValues[exchange]};
          opportunity.max = {[exchange]: coinValues[exchange]};
        } else if  (coinValues[exchange] < Object.values(opportunity.min)) {
          opportunity.min = { [exchange]: coinValues[exchange] };
        } else if (coinValues[exchange] > Object.values(opportunity.max)) {
          opportunity.max = { [exchange]: coinValues[exchange] };
        }
      }

      let min = Object.values(opportunity.min);
      let max = Object.values(opportunity.max);
      opportunities[coin] = {difference: 1 - (min / max), min: opportunity.min, max: opportunity.max};
    }

    return opportunities;
  }
```

In the above code snippet, I iterate over each of the pieces of coin data returned from an API call, skipping them if they have been blacklisted. I then create and object where I set the price values for the coin on each exchange, also skipping blacklisted exchanges. From there I check the values on each exchange in order to find the minimum and maximum trading values for the given coin, storing the min and max of each coin in an object for later reference.

## Technologies

Node.js was used as the backend for this project, along with MongoDB for the database, and Express.js for routing due to the growing popularity of these technologies, and to learn more about them. 

On the frontend, Redux was used to store application state with various segments for news articles, pricing data for coins across numerous exchanges, as well as lists of news sources and categories. This keeps the state normalized, with everything easily accessible and without duplication of data. This aslo allows data to be more easily passed down to the various React components which are quickly updated depending upon user input.

