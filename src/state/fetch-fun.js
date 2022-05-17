import {
  actFetchStoriesReq,
  actFetchStoriesSucc,
} from '../state/reducers-actions';

const base_Url = 'https://hacker-news.firebaseio.com/v0';
const storiesID_Url = `${base_Url}/topstories.json`;
const item_Url = (itemID) => `${base_Url}/item/${itemID}.json`;

const getItem = async (id) => {
  const fetchArticle = await fetch(item_Url(id));
  if (!fetchArticle.ok) return;

  return await fetchArticle.json();
};

const getItems = (itemIds) => {
  const itemPromises = itemIds.map(getItem);

  return Promise.all(itemPromises);
};

export const getStories = (seqncStart, seqncEnd) => async (dispatch) => {
  dispatch(actFetchStoriesReq());

  const getStoryIds = await fetch(storiesID_Url);
  if (!getStoryIds.ok) return;

  const storyIds = await getStoryIds.json();

  const renderStoryIds = storyIds.slice(seqncStart, seqncStart + seqncEnd);

  const responseStories = await getItems(renderStoryIds);
  dispatch(actFetchStoriesSucc(responseStories));
};
