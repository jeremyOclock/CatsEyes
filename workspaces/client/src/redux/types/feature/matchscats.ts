import { CatsDuoResponse } from '../../../../../api/src/controllers/cats/randomDuo';

export const MATCHSCATS = 'matchscats';

export const FETCH_DATA = `${MATCHSCATS}/fetch_data`;
export const VOTE = `${MATCHSCATS}/vote`;
export const SET_MATCHSCATS = `${MATCHSCATS}/set_matchscats`;

export interface MatchsCatsState {
  cats: CatsDuoResponse | null;
}

export interface FetchData {
  type: string;
}

export interface Vote {
  type: string;
  payload: {
    id: string;
  };
}

export interface SetMatchsCats {
  type: string;
  payload: {
    data: MatchsCatsState['cats'];
  };
}
