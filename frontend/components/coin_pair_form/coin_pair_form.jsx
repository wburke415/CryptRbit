import React from 'react';

class CoinPairForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      // fsym: props.preferences.fsym || props.coinPair.tsym,
      // tsym: props.preferences.fsym || props.coinPair.tsym
      fsym: '',
      tsym: ''
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.viewArbitrage = this.viewArbitrage.bind(this);
  }

  viewArbitrage(e) {
    e.preventDefault();
    this.setState({fsym: ''});
    this.setState({tsym: ''});
    this.props.changeCoinPair(this.state.fsym, this.state.tsym);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let fsym = this.state.fsym;
    let tsym = this.state.tsym;
    this.props.changeCoinPair(fsym, tsym);
  }

  render() {
    return (
      <div className="container">
        <div className="row arbitrage-definition col-10 offset-1" >
          <h1>Arbitrage</h1>
          <p>Arbitrage is the practice of taking advantage of a price difference between two or more markets: striking a combination of matching deals that capitalize upon the imbalance, the profit being the difference between the market prices.</p>
        </div>
        <form onSubmit={this.handleSubmit} className="d-inline p-2 w-100 col-11">
          <div className="row" align="center">

            <button className="col-2 offset-1" onClick={this.viewArbitrage}>View Arbitrage Opportunities</button>

            <div className="col-6">
              <label className="col-6">From-Currency
                <input placeholder=" BTC" onChange={this.update('fsym')} className="ml-2"></input>
              </label>

              <label className="col-6">To-Currency
                <input placeholder=" USD" onChange={this.update('tsym')} className="ml-2"></input>
              </label>
            </div>

            <button onClick={this.handleSubmit} className="col-2 button">View Prices by Currency Pair</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CoinPairForm;
