import { Axios, Canceler } from '../../../core/axios';
import * as actions from '..';

export const fetchnftsSalesBreakdown = () => async (dispatch, getState) => {
  
  //access the state
  const state = getState();
  console.log(state);

  dispatch(actions.getNftsDetailsBreakdown.request(Canceler.cancel));

  try {
    const { data } = await Axios.get('/mock_data/nfts_sales.json', {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getNftsDetailsBreakdown.success(data));
  } catch (err) {
    dispatch(actions.getNftsSalesBreakdown.failure(err));
  }
};



export const fetchNftsSalesShowcase = () => async (dispatch) => {

  dispatch(actions.getNftsDetailsShowcase.request(Canceler.cancel));

  try {
    const { data } = await Axios.get('/mock_data/nft_sales.json', {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getNftsDetailsShowcase.success(data));
  } catch (err) {
    dispatch(actions.getNftsDetailsShowcase.failure(err));
  }
};

export const fetchNftsSalesDetail = () => async (dispatch) => {

  dispatch(actions.getNftsDetailsDetail.request(Canceler.cancel));

  try {
    const { data } = await Axios.get('/mock_data/nft_sales.json', {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getNftsDetailsDetail.success(data));
  } catch (err) {
    dispatch(actions.getNftsDetailsDetail.failure(err));
  }
};
