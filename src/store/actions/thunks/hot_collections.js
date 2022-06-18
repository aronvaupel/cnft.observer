import { Axios, Canceler } from '../../../core/axios';
import * as actions from '..';

export const fetchAllHotCollectionsBreakdown = () => async (dispatch, getState) => {
  
  //access the state
  const state = getState();
  console.log(state);

  dispatch(actions.getAllHotCollectionsBreakdown.request(Canceler.cancel));

  try {
    const { data } = await Axios.get('/mock_data/all_hot_collections.json', {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getAllHotCollectionsBreakdown.success(data));
  } catch (err) {
    dispatch(actions.getAllHotCollectionsBreakdown.failure(err));
  }
};



export const fetchAllHotCollectionsShowcase = () => async (dispatch) => {

  dispatch(actions.getAllHotCollectionsShowcase.request(Canceler.cancel));

  try {
    const { data } = await Axios.get('/mock_data/all_hot_collections.json', {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getAllHotCollectionsShowcase.success(data));
  } catch (err) {
    dispatch(actions.getAllHotCollectionsShowcase.failure(err));
  }
};

export const fetchHotCollectionsDetail = () => async (dispatch) => {

  dispatch(actions.getAllHotCollectionsDetail.request(Canceler.cancel));

  try {
    const { data } = await Axios.get('/mock_data/all_hot_collections.json', {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getAllHotCollectionsDetail.success(data));
  } catch (err) {
    dispatch(actions.getAllHotCollectionsDetail.failure(err));
  }
};
