import { getType } from 'typesafe-actions';
import * as actions from '../actions';
import { initEntityState, entityLoadingStarted, entityLoadingSucceeded, entityLoadingFailed } from '../utils';

export const defaultState = {
  newsBreakdown: initEntityState(null),
 newsDetail: initEntityState(null),
 newsShowcase: initEntityState(null)
};

const states = (state = defaultState, action) => {
  switch (action.type) {
    
    case getType(actions.getNewsBreakdown.request):
      return { ...state, newsBreakdown: entityLoadingStarted(state.newsBreakdown, action.payload) };
    case getType(actions.getNewsBreakdown.success):
      //append existing data with new data
      let payload = state.newsBreakdown.data ? [...state.newsBreakdown.data, ...action.payload] : action.payload;
      return { ...state, newsBreakdown: entityLoadingSucceeded(state.newsBreakdown, payload) };
    case getType(actions.getNewsBreakdown.failure):
      return { ...state, newsBreakdown: entityLoadingFailed(state.newsBreakdown) };
    
    case getType(actions.getNewsDetail.request):
      return { ...state, newsDetail: entityLoadingStarted(state.newsDetail, action.payload) };
    case getType(actions.getNewsDetail.success):
      return { ...state, newsDetail: entityLoadingSucceeded(state.newsDetail, action.payload) };
    case getType(actions.getNewsDetail.failure):
      return { ...state, newsDetail: entityLoadingFailed(state.newsDetail) };
    
    case getType(actions.getNewsShowcase.request):
      return { ...state, newsShowcase: entityLoadingStarted(state.newsShowcase, action.payload) };
    case getType(actions.getNewsShowcase.success):
      return { ...state, newsShowcase: entityLoadingSucceeded(state.newsShowcase, action.payload) };
    case getType(actions.getNewsShowcase.failure):
      return { ...state, newsShowcase: entityLoadingFailed(state.newsShowcase) };
    
    default:
      return state;
  }
};

export default states;