import { Middleware } from 'redux';
import { FETCH_DATA, RESULTS_CATS } from '../../types/feature/resultscats';

import { apiRequest } from '../../actions/core/api';
import { API_SUCCESS, API_ERROR } from '../../types/core/api';
import { setResultsCats } from '../../actions/feature/resultscats';

const resultsCatsMiddleware: Middleware = ({ dispatch }) => next => action => {
  next(action);

  switch (action.type) {
    case FETCH_DATA:
      dispatch(
        apiRequest({
          body: null,
          method: 'GET',
          url: `${process.env.REACT_APP_API_URL}/cats/scores?page=${action.payload.page}&limit=${action.payload.limit}`,
          feature: RESULTS_CATS
        })
      );
      break;

    case `${RESULTS_CATS}/${API_SUCCESS}`:
      dispatch(setResultsCats({ data: action.payload.data }));
      break;

    case `${RESULTS_CATS}/${API_ERROR}`:
      // TODO: error handleing
      console.log(action.payload);
      break;
  }
};

export default resultsCatsMiddleware;
