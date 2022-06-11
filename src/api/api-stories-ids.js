import {
  actFetchStoriesIdsReq,
  actFetchStoriesIdsSucc,
  actFetchStoriesIdsFail,
} from '../state/reducers/reducer-stories-ids';

import { STORIES_ID_URL } from './../utils/utils-api';

export const getStoriesIds = () => async (dispatch) => {
  dispatch(actFetchStoriesIdsReq());

  console.log('sasa');

  const getStoriesIds = await fetch(STORIES_ID_URL);

  if (!getStoriesIds.ok) {
    dispatch(actFetchStoriesIdsFail('Error Stories Ids!'));
    return;
  }

  const responseStoriesIds = await getStoriesIds.json();

  dispatch(actFetchStoriesIdsSucc(responseStoriesIds));
};
