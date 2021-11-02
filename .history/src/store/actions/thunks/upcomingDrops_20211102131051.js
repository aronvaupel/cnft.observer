import { Axios, Canceler } from '../../../core/axios';
import * as actions from '../../actions';

export const fetchUpcomingDropsBreakdown = () => async (dispatch, getState) => {
  
  //access the state
  const state = getState();
  console.log(state);

  dispatch(actions.getUpcomingDropsBreakdown.request(Canceler.cancel));

  try {
    const { data } = await Axios.get('/mock_data/upcoming_drops.json', {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getUpcomingDropsBreakdown.success(data));
  } catch (err) {
    dispatch(actions.getUpcomingDropsBreakdown.failure(err));
  }
};



