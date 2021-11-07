import { Axios, Canceler } from '../../../core/axios';
import * as actions from '../../actions';

export const fetchChartsBreakdown = () => async (dispatch, getState) => {
  
  //access the state
  const state = getState();
  console.log(state);

  dispatch(actions.getChartsBreakdown.request(Canceler.cancel));

  try {
    const { data } = await Axios.get('/mock_data/charts.json', {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getChartsBreakdown.success(data));
  } catch (err) {
    dispatch(actions.getChartsBreakdown.failure(err));
  }
};

export const fetchChartsShowcase = () => async (dispatch) => {

  dispatch(actions.getChartsShowcase.request(Canceler.cancel));

  try {
    const { data } = await Axios.get('/mock_data/charts.json', {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getChartsShowcase.success(data));
  } catch (err) {
    dispatch(actions.getChartsShowcase.failure(err));
  }
};

export const fetchChartsDetail = () => async (dispatch) => {

  dispatch(actions.getChartsDetail.request(Canceler.cancel));

  try {
    const { data } = await Axios.get('/mock_data/charts.json', {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getChartsDetail.success(data));
  } catch (err) {
    dispatch(actions.getChartsDetail.failure(err));
  }
};




