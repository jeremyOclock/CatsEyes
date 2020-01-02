import {
  combineReducers,
  compose,
  Middleware,
  applyMiddleware,
  createStore
} from 'redux';

// Feature Reducers
import matchsCatsReducer from './reducers/feature/matchscats';
import resultsCatsReducer from './reducers/feature/resultscats';

// Feature Middlewares
import matchsCatsMiddleware from './middlewares/feature/matchscats';
import resultsCatsMiddleware from './middlewares/feature/resultscats';

// Core Middlewares
import apiMiddleware from './middlewares/core/api';

const rootReducer = combineReducers({
  matchsCats: matchsCatsReducer,
  resultsCats: resultsCatsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const middlewares: Middleware[] = [
  apiMiddleware,
  matchsCatsMiddleware,
  resultsCatsMiddleware
];

const composeEnhancers =
  process.env.NODE_ENV === 'production'
    ? compose
    : ((window as any)[ // eslint-disable-line
        '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' // eslint-disable-line
      ] as typeof compose) || compose; // eslint-disable-line

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export default createStore(rootReducer, {}, enhancer);
