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
    
    default:
      return state;
  }
};

export default states;
