import {
  FetchData,
  FETCH_DATA,
  SetResultsCats,
  SET_RESULTS_CATS
} from '../../types/feature/resultscats';

export const fetchData = ({
  page,
  limit
}: {
  page: FetchData['payload']['page'];
  limit: FetchData['payload']['limit'];
}) => ({
  type: FETCH_DATA,
  payload: {
    page,
    limit
  }
});

export const setResultsCats = ({
  data
}: {
  data: SetResultsCats['payload']['data'];
}) => ({
  type: SET_RESULTS_CATS,
  payload: {
    data
  }
});
