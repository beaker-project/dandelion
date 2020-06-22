/* eslint-disable @typescript-eslint/camelcase */
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';
import api from '../../../services/api';
import load from './sagas';
import * as actions from './actions';
import reducer from '.';

describe('localtime saga', () => {
  test('fetches local time data', () => {
    const apiResponse = {
      data: {
        abbreviation: 'string',
        client_ip: 'string',
        datetime: '2020-06-19T11:16:00.608166+02:00',
        day_of_week: 0,
        day_of_year: 0,
        dst: true,
        dst_from: 'string',
        dst_offset: 0,
        dst_until: 'string',
        raw_offset: 0,
        timezone: 'string',
        unixtime: 0,
        utc_datetime: 'string',
        utc_offset: 'string',
        week_number: 0,
      },
    };
    return expectSaga(load)
      .dispatch(actions.loadRequest())
      .withReducer(reducer)
      .provide([[matchers.call.fn(api.get), apiResponse]])
      .put(actions.loadSuccess(apiResponse.data))
      .hasFinalState({
        dateString: 'Fri, 19 Jun 2020 09:16:00 GMT',
        loading: false,
        error: false,
      })
      .run();
  });

  test('handles errors', () => {
    return expectSaga(load)
      .dispatch(actions.loadRequest())
      .withReducer(reducer)
      .provide([[matchers.call.fn(api.get), throwError(new Error('error'))]])
      .put(actions.loadFailure())
      .hasFinalState({
        dateString: '',
        loading: false,
        error: true,
      })
      .run();
  });
});
