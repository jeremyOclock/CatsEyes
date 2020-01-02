import { Reducer } from 'redux';
import {
  ResultsCatsState,
  SET_RESULTS_CATS
} from '../../types/feature/resultscats';

const initState: ResultsCatsState = {
  cats: null
};

const resultsCatsReducer: Reducer<ResultsCatsState> = (
  state = initState,
  action
) => {
  switch (action.type) {
    case SET_RESULTS_CATS:
      return {
        ...state,
        cats: (state.cats || []).concat(action.payload.data)
      };

    default:
      return state;
  }
};

export default resultsCatsReducer;
