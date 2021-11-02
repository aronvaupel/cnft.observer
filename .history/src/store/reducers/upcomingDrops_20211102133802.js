import { getType } from 'typesafe-actions';
import * as actions from '../actions';
import { initEntityState, entityLoadingStarted, entityLoadingSucceeded, entityLoadingFailed } from '../utils';

export const defaultState = {
  upcomingDropsBreakdown: initEntityState(null),
 upcomingDropsDetail: initEntityState(null),
 upcomingDropsShowcase: initEntityState(null)
};

const states = (state = defaultState, action) => {
  switch (action.type) {
    
    case getType(actions.getUpcomingDropsBreakdown.request):
      return { ...state, upcomingDropsBreakdown: entityLoadingStarted(state.upcomingDropsBreakdown, action.payload) };
    case getType(actions.getUpcomingDropsBreakdown.success):
      //append existing data with new data
      let payload = state.upcomingDropsBreakdown.data ? [...state.upcomingDropsBreakdown.data, ...action.payload] : action.payload;
      return { ...state, upcomingDropsBreakdown: entityLoadingSucceeded(state.upcomingDropsBreakdown, payload) };
    case getType(actions.getUpcomingDropsBreakdown.failure):
      return { ...state, upcomingDropsBreakdown: entityLoadingFailed(state.upcomingDropsBreakdown) };
    
    case getType(actions.getUpcomingDropsDetail.request):
      return { ...state, nftDetail: entityLoadingStarted(state.nftDetail, action.payload) };
    case getType(actions.getUpcomingDropsDetail.success):
      return { ...state, nftDetail: entityLoadingSucceeded(state.nftDetail, action.payload) };
    case getType(actions.getUpcomingDropsDetail.failure):
      return { ...state, nftDetail: entityLoadingFailed(state.nftDetail) };
    
    case getType(actions.getUpcomingDropsShowcase.request):
      return { ...state, nftShowcase: entityLoadingStarted(state.nftShowcase, action.payload) };
    case getType(actions.getUpcomingDropsShowcase.success):
      return { ...state, nftShowcase: entityLoadingSucceeded(state.nftShowcase, action.payload) };
    case getType(actions.getUpcomingDropsShowcase.failure):
      return { ...state, nftShowcase: entityLoadingFailed(state.nftShowcase) };

    case getType(actions.clearNfts):
      return { ...state, nftBreakdown: initEntityState(null)};
    
    default:
      return state;
  }
};

export default states;
