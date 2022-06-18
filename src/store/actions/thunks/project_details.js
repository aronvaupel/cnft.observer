import { Axios, Canceler } from '../../../core/axios';
import * as actions from '..';

export const fetchProjectDetailsBreakdown = () => async (dispatch, getState) => {
  
  //access the state
  const state = getState();
  console.log(state);

  dispatch(actions.getProjectDetailsBreakdown.request(Canceler.cancel));

  try {
    const { data } = await Axios.get('/mock_data/nfts_details.json', {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getProjectDetailsBreakdown.success(data));
  } catch (err) {
    dispatch(actions.getProjectDetailsBreakdown.failure(err));
  }
};



export const fetchProjectDetailsShowcase = () => async (dispatch) => {

  dispatch(actions.getProjectDetailsShowcase.request(Canceler.cancel));

  try {
    const { data } = await Axios.get('/mock_data/nft_details.json', {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getProjectDetailsShowcase.success(data));
  } catch (err) {
    dispatch(actions.getProjectDetailsShowcase.failure(err));
  }
};

export const fetchProjectDetailsDetail = () => async (dispatch) => {

  dispatch(actions.getProjectDetailsDetail.request(Canceler.cancel));

  try {
    const { data } = await Axios.get('/mock_data/nft_details.json', {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getProjectDetailsDetail.success(data));
  } catch (err) {
    dispatch(actions.getProjectDetailsDetail.failure(err));
  }
};
