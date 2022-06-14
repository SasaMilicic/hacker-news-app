import { actFetchStoriesIdsSucc } from '../state/reducers/reducer-stories-ids';

import { STORIES_ID_URL } from './../utils/utils-api';

export const getStoriesIds = () => async (dispatch) => {
  const getStoriesIds = await fetch(STORIES_ID_URL);

  if (!getStoriesIds.ok) {
    dispatch(actFetchStoriesIdsSucc({ error: "Stories isn't available!" }));
    return;
  }

  const responseStoriesIds = await getStoriesIds.json();
  dispatch(actFetchStoriesIdsSucc(responseStoriesIds));
};
