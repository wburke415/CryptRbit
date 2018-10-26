import { connect } from 'react-redux';

import {fetchArticles, fetchCategories, fetchSources} from '../../actions/news_feed_actions';
import NewsFeed from './news_feed';

const mapStateToProps = (state, ownProps) => {
  let coinPair;
  if (state.entities.coinPair && state.entities.coinPair.fsym) {
    coinPair = `categories=${state.entities.coinPair.fsym}`;
  } else if (state.session.coin) {
    coinPair = `categories=${state.session.coin}`;
  } else {
    coinPair = '';
  }

  return ({
    newsArticles: Object.values(state.entities.newsArticles),
    newsCategories: state.entities.newsCategories,
    newsSources: state.entities.newsSources,
    coinPair,
    userPrefs: state.session
  });
};

const mapDispatchToProps = dispatch => ({
  fetchArticles: params => dispatch(fetchArticles(params)),
  fetchCategories: () => dispatch(fetchCategories()),
  fetchSources: () => dispatch(fetchSources())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);