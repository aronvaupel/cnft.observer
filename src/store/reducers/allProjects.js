import { getType } from 'typesafe-actions';
import * as actions from '../actions';
import { initEntityState, entityLoadingStarted, entityLoadingSucceeded, entityLoadingFailed } from '../utils';

export const defaultState = {
  allProjects: initEntityState(null),
  allProjectsRanking: initEntityState(null),
};

const states = (state = defaultState, action) => {
  switch (action.type) {
    
    case getType(actions.getAllProjects.request):
      return { ...state, allProjects: entityLoadingStarted(state.allProjects, action.payload) };
    case getType(actions.getAllProjects.success):
      return { ...state, allProjects: entityLoadingSucceeded(state.allProjects, action.payload) };
    case getType(actions.getAllProjects.failure):
      return { ...state, allProjects: entityLoadingFailed(state.allProjects) };
    
      case getType(actions.getAllProjectsRanking.request):
      return { ...state, allProjectsRanking: entityLoadingStarted(state.allProjectsRanking, action.payload) };
    case getType(actions.getAllProjectsRanking.success):
      return { ...state, allProjectsRanking: entityLoadingSucceeded(state.allProjectsRanking, action.payload) };
    case getType(actions.getAllProjectsRanking.failure):
      return { ...state, allProjectsRanking: entityLoadingFailed(state.allProjectsRanking) };

    default:
      return state;
  }
};

export default states;
