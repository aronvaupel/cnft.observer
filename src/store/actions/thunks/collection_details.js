import { Axios, Canceler } from '../../../core/axios';
import * as actions from '..';

export const fetchCollectionDetailsBreakdown = () => async (dispatch, getState) => {
  
  //access the state
  const state = getState();
  console.log(state);

  dispatch(actions.getCollectionDetailsBreakdown.request(Canceler.cancel));

  try {
    const { data } = await Axios.get('/mock_data/nfts_details.json', {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getCollectionDetailsBreakdown.success(data));
  } catch (err) {
    dispatch(actions.getCollectionDetailsBreakdown.failure(err));
  }
};



export const fetchCollectionDetailsShowcase = () => async (dispatch) => {

  dispatch(actions.getCollectionDetailsShowcase.request(Canceler.cancel));

  try {
    const { data } = await Axios.get('/mock_data/nft_details.json', {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getCollectionDetailsShowcase.success(data));
  } catch (err) {
    dispatch(actions.getCollectionDetailsShowcase.failure(err));
  }
};

export const fetchCollectionDetailsDetail = () => async (dispatch) => {

  dispatch(actions.getCollectionDetailsDetail.request(Canceler.cancel));

  try {
    const { data } = await Axios.get('/mock_data/nft_details.json', {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getCollectionDetailsDetail.success(data));
  } catch (err) {
    dispatch(actions.getCollectionDetailsDetail.failure(err));
  }
};
