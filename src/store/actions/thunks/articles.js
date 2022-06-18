import { Axios, Canceler } from '../../../core/axios';
import * as actions from '../../actions';

export const fetchArticlesBreakdown = () => async (dispatch, getState) => {
  
  //access the state
  const state = getState();
  console.log(state);

  dispatch(actions.getArticlesBreakdown.request(Canceler.cancel));

  try {
    const { data } = await Axios.get('/mock_data/articles.json', {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getArticlesBreakdown.success(data));
  } catch (err) {
    dispatch(actions.getArticlesBreakdown.failure(err));
  }
};