import { Middleware } from 'redux';
import { apiSuccess, apiError } from '../../actions/core/api';
import Axios from 'axios';
import { API_REQUEST } from '../../types/core/api';

const apiMiddleware: Middleware = ({ dispatch }) => next => async action => {
  next(action);

  if (action.type.includes(API_REQUEST)) {
    const body = action.payload;
    const { url, method, feature } = action.meta;

    try {
      const response = await Axios({ method, url, data: body });
      dispatch(apiSuccess({ response, feature }));
    } catch (error) {
      console.dir(error);
      dispatch(apiError({ error, feature }));
    }
  }
};

export default apiMiddleware;
