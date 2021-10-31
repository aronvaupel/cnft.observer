import { combineReducers } from 'redux';
import nftReducer from './nfts';
import hotCollectionsReducer from './hotCollections';
import authorListReducer from './authorList';
import topProjectsReducer from './topProjectsList';
import filterReducer from './filters';

export const rootReducer = combineReducers({
  NFT: nftReducer,
  hotCollection: hotCollectionsReducer,
  authors: authorListReducer,
  filters: filterReducer,
  projects: topProjectListReducer
});

const reducers = (state, action) => rootReducer(state, action);

export default reducers;