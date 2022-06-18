import { getType } from 'typesafe-actions';
import * as actions from '../actions';
import { initEntityState, entityLoadingStarted, entityLoadingSucceeded, entityLoadingFailed } from '../utils';

export const defaultState = {
  allHotCollectionsBreakdown: initEntityState(null),
  allHotCollectionsDetail: initEntityState(null),
  allHotCollectionsShowcase: initEntityState(null)
};

const states = (state = defaultState, action) => {
  switch (action.type) {
    
    case getType(actions.getAllHotCollectionsBreakdown.request):
      return { ...state, allHotCollectionsBreakdown: entityLoadingStarted(state.allHotCollectionsBreakdown, action.payload) };
    case getType(actions.getAllHotCollectionsBreakdown.success):
      //append existing data with new data
      let payload = state.allHotCollectionsBreakdown.data ? [...state.allHotCollectionsBreakdown.data, ...action.payload] : action.payload;
      return { ...state,allHotCollectionsBreakdown: entityLoadingSucceeded(state.allHotCollectionsBreakdown, payload) };
    case getType(actions.getAllHotCollectionsBreakdown.failure):
      return { ...state, allHotCollectionsBreakdown: entityLoadingFailed(state.allHotCollectionsBreakdown) };
    
    case getType(actions.getAllHotCollectionsDetail.request):
      return { ...state, allHotCollectionsDetail: entityLoadingStarted(state.allHotCollectionsDetail, action.payload) };
    case getType(actions.getAllHotCollectionsDetail.success):
      return { ...state, allHotCollectionsDetail: entityLoadingSucceeded(state.allHotCollectionsDetail, action.payload) };
    case getType(actions.getAllHotCollectionsDetail.failure):
      return { ...state, allHotCollectionsDetail: entityLoadingFailed(state.allHotCollectionsDetail) };
    
    case getType(actions.getAllHotCollectionsShowcase.request):
      return { ...state, allHotCollectionsShowcase: entityLoadingStarted(state.allHotCollectionsShowcase, action.payload) };
    case getType(actions.getAllHotCollectionsShowcase.success):
      return { ...state, allHotCollectionsShowcase: entityLoadingSucceeded(state.allHotCollectionsShowcase, action.payload) };
    case getType(actions.getAllHotCollectionsShowcase.failure):
      return { ...state, allHotCollectionsShowcase: entityLoadingFailed(state.allHotCollectionsShowcase) };

    case getType(actions.clearNfts):
      return { ...state, allHotCollectionsBreakdown: initEntityState(null)};
    
    default:
      return state;
  }
};

export default states;
