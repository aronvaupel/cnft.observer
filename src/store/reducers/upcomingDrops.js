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
      return { ...state, upcomingDropsDetail: entityLoadingStarted(state.upcomingDropsDetail, action.payload) };
    case getType(actions.getUpcomingDropsDetail.success):
      return { ...state, upcomingDropsDetail: entityLoadingSucceeded(state.upcomingDropsDetail, action.payload) };
    case getType(actions.getUpcomingDropsDetail.failure):
      return { ...state, upcomingDropsDetail: entityLoadingFailed(state.upcomingDropsDetail) };
    
    case getType(actions.getUpcomingDropsShowcase.request):
      return { ...state, upcomingDropsShowcase: entityLoadingStarted(state.upcomingDropsShowcase, action.payload) };
    case getType(actions.getUpcomingDropsShowcase.success):
      return { ...state, upcomingDropsShowcase: entityLoadingSucceeded(state.upcomingDropsShowcase, action.payload) };
    case getType(actions.getUpcomingDropsShowcase.failure):
      return { ...state, upcomingDropsShowcase: entityLoadingFailed(state.upcomingDropsShowcase) };
    
    default:
      return state;
  }
};

export default states;
