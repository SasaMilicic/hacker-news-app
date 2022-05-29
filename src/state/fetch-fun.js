import {
  actFetchStoriesReq,
  actFetchStoriesSucc,
  actFetchStoriesFail,
} from '../state/reducers-actions';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const STORIES_ID_URL = `${BASE_URL}/topstories.json`;
const ITEM_URL = (itemID) => `${BASE_URL}/item/${itemID}.json`;

const isNotDataAvlbl = (items) => {
  return items.length === 0 || items.every((story) => !story);
};
const isNotEveryStoryAvlbl = (items) => items.some((story) => !story);

const errorMessages = {
  msgNoIds: 'Something went wrong, please try for few minutes!',
  msgNoData: 'Currently No stories available!',
  msgNoStory: "Some of stories isn't available!",
};

const getFilteredStories = (stories, storiesIds) => {
  const filteredStories = stories.map((item, indexStory) => {
    if (!item) {
      return {
        id: storiesIds.filter((el, indexErr) => indexErr === indexStory),
      };
    }
    return item;
  });

  return filteredStories;
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

  // const renderStoryIds = storyIds.slice(seqncStart, seqncEnd);

  const renderStoryIds = [
    221544634, 31546799, 31539549, 31546724, 31546334, 31516764, 31545324,
    31547879, 315423414372, 31528601, 31543953, 31545142, 31544997, 31542502,
    31546258, 31541460, 315463124180, 31538866, 31547810, 31547876, 31511958,
    31544816, 31547765, 31545399, 31547860, 31506962, 31519370, 31543054,
    31539944,
  ];

  let responseStories = await getItems(renderStoryIds);

  // const commentsIds = responseStories.map((story) => story.kids);

  // console.log(commentsIds);

  if (isNotDataAvlbl(responseStories)) {
    dispatch(actFetchStoriesFail(errorMessages.msgNoData));
    return;
  }

  if (isNotEveryStoryAvlbl(responseStories)) {
    dispatch(actFetchStoriesFail(errorMessages.msgNoStory));
    responseStories = getFilteredStories(responseStories, storyIds);
  }

  dispatch(actFetchStoriesSucc(responseStories));
};
