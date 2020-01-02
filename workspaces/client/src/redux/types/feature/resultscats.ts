import { ICat } from '../../../../../api/src/models/Cat';

export const RESULTS_CATS = 'resultscats';

export const FETCH_DATA = `${RESULTS_CATS}/fetch_data`;
export const SET_RESULTS_CATS = `${RESULTS_CATS}/set_results_cats`;

export interface ResultsCatsState {
  cats: ICat[] | null;
}

export interface FetchData {
  type: string;
  payload: {
    page: number;
    limit: number;
  };
}

export interface SetResultsCats {
  type: string;
  payload: {
    data: ResultsCatsState['cats'];
  };
}
