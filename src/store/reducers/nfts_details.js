import { getType } from 'typesafe-actions';
import * as actions from '../actions';
import { initEntityState, entityLoadingStarted, entityLoadingSucceeded, entityLoadingFailed } from '../utils';

export const defaultState = {
  nftsDetailsBreakdown: initEntityState(null),
  nftsDetailsDetail: initEntityState(null),
  nftsDetailsShowcase: initEntityState(null)
};

const states = (state = defaultState, action) => {
  switch (action.type) {
    
    case getType(actions.getNftsDetailsBreakdown.request):
      return { ...state, nftsDetailsBreakdown: entityLoadingStarted(state.nftsDetailsBreakdown, action.payload) };
    case getType(actions.getNftsDetailsBreakdown.success):
      //append existing data with new data
      let payload = state.nftsDetailsBreakdown.data ? [...state.nftsDetailsBreakdown.data, ...action.payload] : action.payload;
      return { ...state, nftsDetailsBreakdown: entityLoadingSucceeded(state.nftsDetailsBreakdown, payload) };
    case getType(actions.getNftsDetailsBreakdown.failure):
      return { ...state, nftsDetailsBreakdown: entityLoadingFailed(state.nftsDetailsBreakdown) };
    
    case getType(actions.getNftsDetailsDetail.request):
      return { ...state, nftsDetailsDetail: entityLoadingStarted(state.nftsDetailsDetail, action.payload) };
    case getType(actions.getNftsDetailsDetail.success):
      return { ...state, nftsDetailsDetail: entityLoadingSucceeded(state.nftsDetailsDetail, action.payload) };
    case getType(actions.getNftsDetailsDetail.failure):
      return { ...state, nftsDetailsDetail: entityLoadingFailed(state.nftsDetailsDetail) };
    
    case getType(actions.getNftsDetailsShowcase.request):
      return { ...state, nftsDetailsShowcase: entityLoadingStarted(state.nftsDetailsShowcase, action.payload) };
    case getType(actions.getNftsDetailsShowcase.success):
      return { ...state, nftsDetailsShowcase: entityLoadingSucceeded(state.nftsDetailsShowcase, action.payload) };
    case getType(actions.getNftsDetailsShowcase.failure):
      return { ...state, nftsDetailsShowcase: entityLoadingFailed(state.nftsDetailsShowcase) };

    case getType(actions.clearNfts):
      return { ...state, nftsDetailsBreakdown: initEntityState(null)};
    
    default:
      return state;
  }
};

export default states;
