import { Axios, Canceler } from '../../../core/axios';
import * as actions from '../../actions';

export const fetchAllProjects = () => async (dispatch) => {

  dispatch(actions.getAllProjects.request(Canceler.cancel));

  try {
    const { data } = await Axios.get('/mock_data/all_projects.json', {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getAllProjects.success(data));
  } catch (err) {
    dispatch(actions.getAllProjects.failure(err));
  }
};

export const fetchAllProjectsRanking = () => async (dispatch) => {

  dispatch(actions.getAllProjectsRanking.request(Canceler.cancel));

  try {
    const { data } = await Axios.get('/mock_data/all_projects_ranks.json', {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getAllProjectsRanking.success(data));
  } catch (err) {
    dispatch(actions.getAllProjectsRanking.failure(err));
  }
};
