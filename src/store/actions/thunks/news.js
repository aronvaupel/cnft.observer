import { Axios, Canceler } from '../../../core/axios';
import * as actions from '../../actions';

export const fetchNewsBreakdown = () => async (dispatch, getState) => {
  
  //access the state
  const state = getState();
  console.log(state);

  dispatch(actions.getNewsBreakdown.request(Canceler.cancel));

  try {
    const { data } = await Axios.get('/mock_data/news.json', {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getNewsBreakdown.success(data));
  } catch (err) {
    dispatch(actions.getNewsBreakdown.failure(err));
  }
};