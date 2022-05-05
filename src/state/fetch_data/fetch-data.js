import {
  actFetchStoriesFail,
  actFetchStoriesSucc,
  actFetchStoriesReq,
} from './stories-reducer';

export const fetchStoriesData = () => async dispatch => {
  //Loading
  dispatch(actFetchStoriesReq());
  try {
    /////////////////////////// Fetch Stories ID ///////////////////////////
    //Fetching from url
    const fetchArrStoriesID = await fetch(
      'https://hacker-news.firebaseio.com/v0/topstories.json'
    );
    if (!fetchArrStoriesID.ok)
      throw new Error('Problem getting DATA from endpoint');
    //Convert to JSON
    const responseArrStoriesID = await fetchArrStoriesID.json();
    //Success Story
    dispatch(actFetchStoriesSucc(responseArrStoriesID));
    /////////////////////////////////////////////////////////////////////////
  } catch (error) {
    //Reject
    dispatch(actFetchStoriesFail(error));
  }
};
