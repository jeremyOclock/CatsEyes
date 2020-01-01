export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';

export interface ApiRequest {
  type: string;
  payload: object | null;
  meta: {
    method: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS';
    url: string;
    feature: string;
  };
}

export interface ApiSuccess {
  type: string;
  payload: any;
  meta: {
    feature: string;
  };
}

export interface ApiError {
  type: string;
  payload: any;
  meta: {
    feature: string;
  };
}
