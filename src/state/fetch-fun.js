import {
  actFetchStoriesReq,
  actFetchStoriesSucc,
  actFetchStoriesFail,
} from '../state/reducers-actions';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const STORIES_ID_URL = `${BASE_URL}/topstories.json`;
const ITEM_URL = (itemID) => `${BASE_URL}/item/${itemID}.json`;

const isDataAvlbl = (items) => {
  return items.length === 0 || items.every((story) => !story);
};
const isEveryStoryAvlbl = (items) => items.some((story) => !story);

const errorMessages = {
  msgNoIds: 'Something went wrong, please try for few minutes!',
  msgNoData: 'Currently No stories available!',
  msgNoStory: "Some of stories isn't available!",
};

const getItem = async (id) => {
  const fetchArticle = await fetch(ITEM_URL(id));
  if (!fetchArticle.ok) return;

  return await fetchArticle.json();
};

const getItems = (itemIds) => {
  const itemPromises = itemIds.map(getItem);

  return Promise.all(itemPromises);
};

export const getStories = (seqncStart, seqncEnd) => async (dispatch) => {
  dispatch(actFetchStoriesReq());

  const getStoryIds = await fetch(STORIES_ID_URL);

  if (!getStoryIds.ok) {
    dispatch(actFetchStoriesFail(errorMessages.msgNoIds));
    return;
  }

  const storyIds = await getStoryIds.json();
  const renderStoryIds = storyIds.slice(seqncStart, seqncEnd);
  let responseStories = await getItems(renderStoryIds);

  if (isDataAvlbl(responseStories)) {
    dispatch(actFetchStoriesFail(errorMessages.msgNoData));
    return;
  }

  if (isEveryStoryAvlbl(responseStories)) {
    dispatch(actFetchStoriesFail(errorMessages.msgNoStory));
    responseStories = responseStories.filter((story) => story);
  }

  dispatch(actFetchStoriesSucc(responseStories));
};
