import {
  FetchData,
  FETCH_DATA,
  SET_MATCHSCATS,
  SetMatchsCats,
  Vote,
  VOTE
} from '../../types/feature/matchscats';

export const fetchData = (): FetchData => ({
  type: FETCH_DATA
});

export const vote = (id: Vote['payload']['id']): Vote => ({
  type: VOTE,
  payload: {
    id
  }
});

export const setMatchsCats = ({
  data
}: {
  data: SetMatchsCats['payload']['data'];
}): SetMatchsCats => ({
  type: SET_MATCHSCATS,
  payload: {
    data
  }
});
