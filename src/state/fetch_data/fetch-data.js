import { actFetchStoriesSucc, actFetchStoriesReq } from './stories-reducer';

export const fetchStoriesData = () => async dispatch => {
  dispatch(actFetchStoriesReq());

  const fetchArrStoriesID = await fetch(
    'https://hacker-news.firebaseio.com/v0/topstories.json'
  );

  if (!fetchArrStoriesID.ok) return;
  const responseArrStoriesID = await fetchArrStoriesID.json();

  dispatch(actFetchStoriesSucc(responseArrStoriesID));
};
