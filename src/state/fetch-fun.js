import {
  actFetchStoriesReq,
  actFetchStoriesSucc,
} from '../state/reducers-actions';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const storiesIdURL = `${BASE_URL}/topstories.json`;
const itemURL = (itemID) => `${BASE_URL}/item/${itemID}.json`;

const getItem = async (id) => {
  const fetchArticle = await fetch(itemURL(id));
  if (!fetchArticle.ok) return;

  return await fetchArticle.json();
};

const getItems = (itemIds) => {
  const itemPromises = itemIds.map(getItem);

  return Promise.all(itemPromises);
};

export const getStories = (seqncStart, seqncEnd) => async (dispatch) => {
  dispatch(actFetchStoriesReq());

  const getStoryIds = await fetch(storiesIdURL);
  if (!getStoryIds.ok) return;

  const storyIds = await getStoryIds.json();

  const renderStoryIds = storyIds.slice(seqncStart, seqncStart + seqncEnd);

  const responseStories = await getItems(renderStoryIds);
  dispatch(actFetchStoriesSucc(responseStories));
};
