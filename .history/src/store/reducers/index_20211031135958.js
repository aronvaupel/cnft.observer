import { combineReducers } from 'redux';
import nftReducer from './nfts';
import hotCollectionsReducer from './hotCollections';
import authorListReducer from './authorList';
import topProjectsListReducer from './topProjectsList';
import filterReducer from './filters';

export const rootReducer = combineReducers({
  NFT: nftReducer,
  hotCollection: hotCollectionsReducer,
  authors: authorListReducer,
  filters: filterReducer,
  topProjects: topProjectsListReducer
});

const reducers = (state, action) => rootReducer(state, action);

export default reducers;