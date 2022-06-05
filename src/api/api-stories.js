import {
  actFetchStoriesReq,
  actFetchStoriesSucc,
  actFetchStoriesFail,
} from '../state/reducers-actions';

import {
  getItems,
  isNotDataAvilable,
  isNotAllElementsAvilable,
  getFilteredElements,
} from './../utils/api-utils';

import { STORIES_ID_URL } from './../utils/api-utils';

const errorMessages = {
  msgNoIds: 'Something went wrong, please try for few minutes!',
  msgNoData: 'Currently No stories available!',
  msgNoStories: "Some of stories isn't available!",
  msgNoReply: "This Reply currently isn't available!",
  msgNoComment: "This Comment currently isn't available!",
  msgNoStory: "Story isn't available!",
};

export const getStories = (seqncStart, seqncEnd) => async (dispatch) => {
  dispatch(actFetchStoriesReq());

  const getStoriesIds = await fetch(STORIES_ID_URL);

  if (!getStoriesIds.ok) {
    dispatch(actFetchStoriesFail(errorMessages.msgNoIds));
    return;
  }

  const storiesIds = await getStoriesIds.json();

  const renderStoryIds = storiesIds.slice(seqncStart, seqncEnd);
  let responseStories = await getItems(renderStoryIds);

  if (isNotDataAvilable(responseStories)) {
    dispatch(actFetchStoriesFail(errorMessages.msgNoData));
    return;
  }

  if (isNotAllElementsAvilable(responseStories)) {
    dispatch(actFetchStoriesFail(errorMessages.msgNoStories));
    responseStories = getFilteredElements(responseStories, storiesIds);
  }

  dispatch(actFetchStoriesSucc(responseStories));
};
