import { Axios, Canceler } from '../../../core/axios';
import * as actions from '..';


export const fetchTopProjectsList = () => async (dispatch) => {

  dispatch(actions.getTopProjectsList.request(Canceler.cancel));

  try {
    const { data } = await Axios.get('/mock_data/topProjects_list.json', {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getTopProjectsList.success(data));
  } catch (err) {
    dispatch(actions.getTopProjectsList.failure(err));
  }
};

export const fetchAuthorRanking = () => async (dispatch) => {

  dispatch(actions.getAuthorRanking.request(Canceler.cancel));

  try {
    const { data } = await Axios.get('/mock_data/author_ranks.json', {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getAuthorRanking.success(data));
  } catch (err) {
    dispatch(actions.getAuthorRanking.failure(err));
  }
};
 