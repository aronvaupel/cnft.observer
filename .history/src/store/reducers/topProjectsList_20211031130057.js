import { getType } from 'typesafe-actions';
import * as actions from '../actions';
import { initEntityState, entityLoadingStarted, entityLoadingSucceeded, entityLoadingFailed } from '../utils';

export const defaultState = {
  topProjectsList: initEntityState(null),
  topProjectsRanking: initEntityState(null),
};

const states = (state = defaultState, action) => {
  switch (action.type) {
    
    case getType(actions.getTopProjectsList.request):
      return { ...state, topProjectsList: entityLoadingStarted(state.topProjectsList, action.payload) };
    case getType(actions.getTopProjectsList.success):
      return { ...state, topProjectsList: entityLoadingSucceeded(state.topProjectsList, action.payload) };
    case getType(actions.getTopProjectsList.failure):
      return { ...state, topProjectsList: entityLoadingFailed(state.topProjectsList) };
    
      case getType(actions.getTopProjectsList.request):
      return { ...state, topProjectsRanking: entityLoadingStarted(state.topProjectsRanking, action.payload) };
    case getType(actions.getTopProjectsList.success):
      return { ...state, topProjectsRanking: entityLoadingSucceeded(state.topProjectsRanking, action.payload) };
    case getType(actions.getTopProjectsList.failure):
      return { ...state, topProjectsRanking: entityLoadingFailed(state.topProjectsRanking) };

    default:
      return state;
  }
};

export default states;
