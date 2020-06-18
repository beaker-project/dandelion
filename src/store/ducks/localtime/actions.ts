import { action } from 'typesafe-actions';
import { LocaltimeTypes, TimeData } from './types';

export const loadRequest = () => action(LocaltimeTypes.LOAD_REQUEST);

export const loadSuccess = (payload: TimeData) =>
  action(LocaltimeTypes.LOAD_SUCCESS, payload);

export const loadFailure = () => action(LocaltimeTypes.LOAD_FAILURE);
