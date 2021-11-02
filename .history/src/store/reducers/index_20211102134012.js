import { combineReducers } from 'redux';
import nftReducer from './nfts';
import hotCollectionsReducer from './hotCollections';
import authorListReducer from './authorList';
import topProjectsListReducer from './topProjectsList';
import upcomingDropsReducer from './upcomingDrops'
import filterReducer from './filters';

export const rootReducer = combineReducers({
  NFT: nftReducer,
  hotCollection: hotCollectionsReducer,
  authors: authorListReducer,
  filters: filterReducer,
  topProjects: topProjectsListReducer,
  upcomingDrops: upcomingDropsReducer
});

const reducers = (state, action) => rootReducer(state, action);

export default reducers;