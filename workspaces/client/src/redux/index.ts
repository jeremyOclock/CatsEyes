import {
  combineReducers,
  compose,
  Middleware,
  applyMiddleware,
  createStore
} from 'redux';

const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;

const middlewares: Middleware[] = [];

const composeEnhancers =
  process.env.NODE_ENV === 'production'
    ? compose
    : ((window as any)[ // eslint-disable-line
        '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' // eslint-disable-line
      ] as typeof compose) || compose; // eslint-disable-line

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export default createStore(rootReducer, {}, enhancer);
