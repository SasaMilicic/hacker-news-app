import {
  actFetchStoriesReq,
  actFetchStoriesSucc,
} from '../state/reducers-actions';

const fetchDataItemArr = (arrID) =>
  Promise.all(
    arrID.map(async (id) => {
      const fetchItem = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      if (!fetchItem.ok) return;

      const itemData = await fetchItem.json();
      return itemData;
    })
  );

export const fetchStoriesData = (firstSli, numArt) => async (dispatch) => {
  dispatch(actFetchStoriesReq());

  const fetchArrStoriesID = await fetch(
    'https://hacker-news.firebaseio.com/v0/topstories.json'
  );
  if (!fetchArrStoriesID.ok) return;

  const responseArrStoriesID = await fetchArrStoriesID.json();

  const arrRenderStoriesID = responseArrStoriesID.slice(
    firstSli,
    firstSli + numArt
  );

  const responseArrStoriesData = await fetchDataItemArr(arrRenderStoriesID);
  dispatch(actFetchStoriesSucc(responseArrStoriesData));
};
