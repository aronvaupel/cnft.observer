import { Axios, Canceler } from '../../../core/axios';
import * as actions from '../../actions';

export const fetchNftsBreakdown = () => async (dispatch, getState) => {
  
  //access the state
  const state = getState();
  console.log(state);

  dispatch(actions.getNftBreakdown.request(Canceler.cancel));

  try {
    const { data } = await Axios.get('/mock_data/upcoming_drops.json', {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getNftBreakdown.success(data));
  } catch (err) {
    dispatch(actions.getNftBreakdown.failure(err));
  }
};



