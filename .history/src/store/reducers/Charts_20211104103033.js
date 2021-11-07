import { getType } from 'typesafe-actions';
import * as actions from '../actions';
import { initEntityState, entityLoadingStarted, entityLoadingSucceeded, entityLoadingFailed } from '../utils';

export const defaultState = {
  chartsBreakdown: initEntityState(null),
 chartsDetail: initEntityState(null),
 chartsShowcase: initEntityState(null)
};

const states = (state = defaultState, action) => {
  switch (action.type) {
    
    case getType(actions.getChartsBreakdown.request):
      return { ...state, chartsBreakdown: entityLoadingStarted(state.chartsBreakdown, action.payload) };
    case getType(actions.getChartsBreakdown.success):
      //append existing data with new data
      let payload = state.chartsBreakdown.data ? [...state.chartsBreakdown.data, ...action.payload] : action.payload;
      return { ...state, chartsBreakdown: entityLoadingSucceeded(state.chartsBreakdown, payload) };
    case getType(actions.getChartsBreakdown.failure):
      return { ...state, chartsBreakdown: entityLoadingFailed(state.chartsBreakdown) };
    
    case getType(actions.getChartsDetail.request):
      return { ...state, chartsDetail: entityLoadingStarted(state.chartsDetail, action.payload) };
    case getType(actions.getChartsDetail.success):
      return { ...state, chartsDetail: entityLoadingSucceeded(state.chartsDetail, action.payload) };
    case getType(actions.getChartsDetail.failure):
      return { ...state, chartsDetail: entityLoadingFailed(state.chartsDetail) };
    
    case getType(actions.getChartsShowcase.request):
      return { ...state, chartsShowcase: entityLoadingStarted(state.chartsShowcase, action.payload) };
    case getType(actions.getChartsShowcase.success):
      return { ...state, chartsShowcase: entityLoadingSucceeded(state.chartsShowcase, action.payload) };
    case getType(actions.getChartsShowcase.failure):
      return { ...state, chartsShowcase: entityLoadingFailed(state.chartsShowcase) };
    
    default:
      return state;
  }
};

export default states;
