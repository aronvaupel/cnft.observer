import { getType } from 'typesafe-actions';
import * as actions from '../actions';
import { initEntityState, entityLoadingStarted, entityLoadingSucceeded, entityLoadingFailed } from '../utils';

export const defaultState = {
  articlesBreakdown: initEntityState(null),
 articlesDetail: initEntityState(null),
 articlesShowcase: initEntityState(null)
};

const states = (state = defaultState, action) => {
  switch (action.type) {
    
    case getType(actions.getArticlesBreakdown.request):
      return { ...state, articlesBreakdown: entityLoadingStarted(state.articlesBreakdown, action.payload) };
    case getType(actions.getArticlesBreakdown.success):
      //append existing data with new data
      let payload = state.articlesBreakdown.data ? [...state.articlesBreakdown.data, ...action.payload] : action.payload;
      return { ...state, articlesBreakdown: entityLoadingSucceeded(state.articlesBreakdown, payload) };
    case getType(actions.getArticlesBreakdown.failure):
      return { ...state, articlesBreakdown: entityLoadingFailed(state.articlesBreakdown) };
    
    case getType(actions.getArticlesDetail.request):
      return { ...state, articlesDetail: entityLoadingStarted(state.articlesDetail, action.payload) };
    case getType(actions.getArticlesDetail.success):
      return { ...state, articlesDetail: entityLoadingSucceeded(state.articlesDetail, action.payload) };
    case getType(actions.getArticlesDetail.failure):
      return { ...state, articlesDetail: entityLoadingFailed(state.articlesDetail) };
    
    case getType(actions.getArticlesShowcase.request):
      return { ...state, articlesShowcase: entityLoadingStarted(state.articlesShowcase, action.payload) };
    case getType(actions.getArticlesShowcase.success):
      return { ...state, articlesShowcase: entityLoadingSucceeded(state.articlesShowcase, action.payload) };
    case getType(actions.getArticlesShowcase.failure):
      return { ...state, articlesShowcase: entityLoadingFailed(state.articlesShowcase) };
    
    default:
      return state;
  }
};

export default states;