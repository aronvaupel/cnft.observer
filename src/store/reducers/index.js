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
import nftsDetailsReducer from './nfts_details';
import nftsSalesReducer from './nfts_sales';
import allHotCollectionsReducer from './hot_collections'

export const rootReducer = combineReducers({
  NFT: nftReducer,
  hotCollection: hotCollectionsReducer,
  authors: authorListReducer,
  filters: filterReducer,
  topProjects: topProjectsListReducer,
  upcomingDrops: upcomingDropsReducer,
  charts: chartsReducer,
  articles: articlesReducer,
  news: newsReducer,
  nftsDetails: nftsDetailsReducer,
  nftsSales: nftsSalesReducer,
  allHotCollections: allHotCollectionsReducer
});

const reducers = (state, action) => rootReducer(state, action);

export default reducers;