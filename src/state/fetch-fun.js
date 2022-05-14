import {
  actFetchStoriesReq,
  actFetchStoriesSucc,
} from '../state/reducers-actions';

const base_Url = 'https://hacker-news.firebaseio.com/v0';
const storiesID_Url = `${base_Url}/topstories.json`;
const item_Url = (itemID) => `${base_Url}/item/${itemID}.json`;

const getItems = (itemsID) =>
  Promise.all(
    itemsID.map(async (ID) => {
      const fetchArticle = await fetch(item_Url(ID));
      if (!fetchArticle.ok) return;

      return await fetchArticle.json();
    })
  );

export const getStories = (seqncStart, seqncEnd) => async (dispatch) => {
  dispatch(actFetchStoriesReq());

  const storiesID = await fetch(storiesID_Url);
  if (!storiesID.ok) return;

  const renderStoriesID = await storiesID
    .json()
    .then((storiesID) => storiesID.slice(seqncStart, seqncStart + seqncEnd));

  const responseStories = await getItems(renderStoriesID);
  dispatch(actFetchStoriesSucc(responseStories));
};
