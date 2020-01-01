import { Middleware } from 'redux';
import { FETCH_DATA, VOTE } from '../../types/feature/matchscats';
import { apiRequest } from '../../actions/core/api';
import { setMatchsCats, fetchData } from '../../actions/feature/matchscats';
import { API_SUCCESS, API_ERROR } from '../../types/core/api';

const matchsCatsMiddleware: Middleware = ({ dispatch }) => next => action => {
  next(action);

  switch (action.type) {
    case FETCH_DATA:
      dispatch(
        apiRequest({
          body: null,
          method: 'GET',
          url: `${process.env.REACT_APP_API_URL}/cats/randomDuo`,
          feature: FETCH_DATA
        })
      );
      break;

    case `${FETCH_DATA}/${API_SUCCESS}`:
      dispatch(setMatchsCats({ data: action.payload.data }));
      break;

    case VOTE:
      dispatch(
        apiRequest({
          body: {
            id: action.payload.id
          },
          method: 'POST',
          url: `${process.env.REACT_APP_API_URL}/cats/vote`,
          feature: VOTE
        })
      );
      break;

    case `${VOTE}/${API_SUCCESS}`:
      dispatch(fetchData());
      break;

    case `${FETCH_DATA}/${API_ERROR}`:
    case `${VOTE}/${API_ERROR}`:
      // TODO: error handleing
      console.log(action.payload);
      break;
  }
};

export default matchsCatsMiddleware;
