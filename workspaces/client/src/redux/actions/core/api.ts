import {
  ApiRequest,
  API_REQUEST,
  API_SUCCESS,
  API_ERROR,
  ApiSuccess,
  ApiError
} from '../../types/core/api';

export const apiRequest = ({
  body,
  method,
  url,
  feature
}: {
  body: ApiRequest['payload'];
  method: ApiRequest['meta']['method'];
  url: ApiRequest['meta']['url'];
  feature: ApiRequest['meta']['feature'];
}): ApiRequest => ({
  type: `${feature}/${API_REQUEST}`,
  payload: body,
  meta: { method, url, feature }
});

export const apiSuccess = ({
  response,
  feature
}: {
  response: ApiSuccess['payload'];
  feature: ApiSuccess['meta']['feature'];
}): ApiSuccess => ({
  type: `${feature}/${API_SUCCESS}`,
  payload: response,
  meta: { feature }
});

export const apiError = ({
  error,
  feature
}: {
  error: ApiError['payload'];
  feature: ApiError['meta']['feature'];
}): ApiError => ({
  type: `${feature}/${API_ERROR}`,
  payload: error,
  meta: { feature }
});
