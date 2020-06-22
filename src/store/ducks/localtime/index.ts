import { Reducer } from 'redux';
import { LocaltimeState, LocaltimeTypes } from './types';

export const INITIAL_STATE: LocaltimeState = {
  dateString: '',
  loading: false,
  error: false,
};

const reducer: Reducer<LocaltimeState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LocaltimeTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case LocaltimeTypes.LOAD_SUCCESS:
      return {
        loading: false,
        error: false,
        dateString: new Date(action.payload.datetime).toUTCString(),
      };
    case LocaltimeTypes.LOAD_FAILURE:
      return { loading: false, error: true, dateString: '' };
    default:
      return state;
  }
};

export default reducer;
