import { combineReducers } from 'redux';
import nftReducer from './nfts';
import hotCollectionsReducer from './hotCollections';
import authorListReducer from './authorList';
import topProjectsListReducer from './topProjectsList';
import upcomingDropsReducer from './upcomingDrops';
import chartsReducer from './charts';
import filterReducer from './filters';
import articlesReducer from './articles';
import newsReducer from './news';

export const rootReducer = combineReducers({
  NFT: nftReducer,
  hotCollection: hotCollectionsReducer,
  authors: authorListReducer,
  filters: filterReducer,
  topProjects: topProjectsListReducer,
  upcomingDrops: upcomingDropsReducer,
  charts: chartsReducer,
  articles: articlesReducer,
  news: newsReducer
});

const reducers = (state, action) => rootReducer(state, action);

export default reducers;