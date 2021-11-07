import { Axios, Canceler } from '../../../core/axios';
import * as actions from '../../actions';

export const fetchChartsBreakdown = () => async (dispatch, getState) => {
  
  //access the state
  const state = getState();
  console.log(state);

  dispatch(actions.getChartsBreakdown.request(Canceler.cancel));

  try {
    const { data } = await Axios.get('/mock_data/upcoming_drops.json', {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getChartsBreakdown.success(data));
  } catch (err) {
    dispatch(actions.getChartsBreakdown.failure(err));
  }
};



