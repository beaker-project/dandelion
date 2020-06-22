/* eslint-disable @typescript-eslint/camelcase */
import reducer, { INITIAL_STATE } from '.';
import * as actions from './actions';

describe('localtime reducer', () => {
  test('returns the initial state', () => {
    expect(reducer(undefined, { type: 'stub' })).toEqual(INITIAL_STATE);
  });
  test('handles load request', () => {
    expect(reducer(INITIAL_STATE, actions.loadRequest())).toEqual({
      dateString: '',
      loading: true,
      error: false,
    });
  });
  test('handles load success', () => {
    const apiResponse = {
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
    };
    expect(
      reducer(
        { ...INITIAL_STATE, loading: true },
        actions.loadSuccess(apiResponse)
      )
    ).toEqual({
      dateString: 'Fri, 19 Jun 2020 09:16:00 GMT',
      loading: false,
      error: false,
    });
  });
  test('handles load failure', () => {
    expect(
      reducer({ ...INITIAL_STATE, loading: true }, actions.loadFailure())
    ).toEqual({
      dateString: '',
      loading: false,
      error: true,
    });
  });
});
