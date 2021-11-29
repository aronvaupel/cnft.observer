import { getType } from 'typesafe-actions';
import * as actions from '../actions';
import { initEntityState, entityLoadingStarted, entityLoadingSucceeded, entityLoadingFailed } from '../utils';

export const defaultState = {
  nftsSalesBreakdown: initEntityState(null),
  nftsSalesDetail: initEntityState(null),
  nftsSalesShowcase: initEntityState(null)
};

const states = (state = defaultState, action) => {
  switch (action.type) {
    
    case getType(actions.getNftsSalesBreakdown.request):
      return { ...state, nftsSalesBreakdown: entityLoadingStarted(state.nftsSalesBreakdown, action.payload) };
    case getType(actions.getNftsSalesBreakdown.success):
      //append existing data with new data
      let payload = state.nftsSalesBreakdown.data ? [...state.nftsSalesBreakdown.data, ...action.payload] : action.payload;
      return { ...state, nftsSalesBreakdown: entityLoadingSucceeded(state.nftsSalesBreakdown, payload) };
    case getType(actions.getNftsSalesBreakdown.failure):
      return { ...state, nftsSalesBreakdown: entityLoadingFailed(state.nftsSalesBreakdown) };
    
    case getType(actions.getNftsSalesDetail.request):
      return { ...state, nftsSalesDetail: entityLoadingStarted(state.nftsSalesDetail, action.payload) };
    case getType(actions.getNftsSalesDetail.success):
      return { ...state, nftsSalesDetail: entityLoadingSucceeded(state.nftsSalesDetail, action.payload) };
    case getType(actions.getNftsSalesDetail.failure):
      return { ...state, nftsSalesDetail: entityLoadingFailed(state.nftsSalesDetail) };
    
    case getType(actions.getNftsSalesShowcase.request):
      return { ...state, nftsSalesShowcase: entityLoadingStarted(state.nftsSalesShowcase, action.payload) };
    case getType(actions.getNftsSalesShowcase.success):
      return { ...state, nftsSalesShowcase: entityLoadingSucceeded(state.nftsSalesShowcase, action.payload) };
    case getType(actions.getNftsSalesShowcase.failure):
      return { ...state, nftsSalesShowcase: entityLoadingFailed(state.nftsSalesShowcase) };

    case getType(actions.clearNfts):
      return { ...state, nftsSalesBreakdown: initEntityState(null)};
    
    default:
      return state;
  }
};

export default states;
