// Action Types
export enum LocaltimeTypes {
  LOAD_REQUEST = '@localtime/LOAD_REQUEST',
  LOAD_SUCCESS = '@localtime/LOAD_SUCCESS',
  LOAD_FAILURE = '@localtime/LOAD_FAILURE',
}

// Data Types - Returned by the API
export interface TimeData {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: string;
  dst_offset: number;
  dst_until: string;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
}

//  State Type
export interface LocaltimeState {
  readonly dateString: string;
  readonly loading: boolean;
  readonly error: boolean;
}
