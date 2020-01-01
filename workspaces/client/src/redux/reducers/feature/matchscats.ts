import { Reducer } from 'redux';
import {
  MatchsCatsState,
  SET_MATCHSCATS
} from '../../types/feature/matchscats';

const initState: MatchsCatsState = {
  cats: null
};

const matchsCatsReducer: Reducer<MatchsCatsState> = (
  state = initState,
  action
) => {
  switch (action.type) {
    case SET_MATCHSCATS:
      return {
        ...state,
        cats: action.payload.data
      };

    default:
      return state;
  }
};

export default matchsCatsReducer;
