import {
  combineReducers,
  compose,
  Middleware,
  applyMiddleware,
  createStore
} from 'redux';

// Feature Reducer
import matchsCatsReducer from './reducers/feature/matchscats';

// Feature Middleware
import matchsCatsMiddleware from './middlewares/feature/matchscats';

// Core Middlewares
import apiMiddleware from './middlewares/core/api';

const rootReducer = combineReducers({
  matchsCats: matchsCatsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const middlewares: Middleware[] = [apiMiddleware, matchsCatsMiddleware];

const composeEnhancers =
  process.env.NODE_ENV === 'production'
    ? compose
    : ((window as any)[ // eslint-disable-line
        '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' // eslint-disable-line
      ] as typeof compose) || compose; // eslint-disable-line

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export default createStore(rootReducer, {}, enhancer);
