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
    
    case getType(actionsUpcomingDropsBreakdown.request):
      return { ...state, upcomingDropsBreakdown: entityLoadingStarted(state.upcomingDropsBreakdown, action.payload) };
    case getType(actions.getUpcomingDropsBreakdown.success):
      //append existing data with new data
      let payload = state.upcomingDropsBreakdown.data ? [...state.upcomingDropsBreakdown.data, ...action.payload] : action.payload;
      return { ...state, upcomingDropsBreakdown: entityLoadingSucceeded(state.upcomingDropsBreakdown, payload) };
    case getType(actionsUpcomingDropsBreakdown.failure):
      return { ...state, upcomingDropsBreakdown: entityLoadingFailed(state.upcomingDropsBreakdown) };
    
    case getType(actionsUpcomingDropsDetail.request):
      return { ...state, upcomingDropsDetail: entityLoadingStarted(state.upcomingDropsDetail, action.payload) };
    case getType(actionsUpcomingDropsDetail.success):
      return { ...state, upcomingDropsDetail: entityLoadingSucceeded(state.upcomingDropsDetail, action.payload) };
    case getType(actionsUpcomingDropsDetail.failure):
      return { ...state, upcomingDropsDetail: entityLoadingFailed(state.upcomingDropsDetail) };
    
    case getType(actionsUpcomingDropsShowcase.request):
      return { ...state, upcomingDropsShowcase: entityLoadingStarted(state.upcomingDropsShowcase, action.payload) };
    case getType(actionsUpcomingDropsShowcase.success):
      return { ...state, upcomingDropsShowcase: entityLoadingSucceeded(state.upcomingDropsShowcase, action.payload) };
    case getType(actionsUpcomingDropsShowcase.failure):
      return { ...state, upcomingDropsShowcase: entityLoadingFailed(state.upcomingDropsShowcase) };

    case getType(actions.clearupcomingDropss):
      return { ...state, upcomingDropsBreakdown: initEntityState(null)};
    
    default:
      return state;
  }
};

export default states;
