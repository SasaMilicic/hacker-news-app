import {
  actFetchStoriesReq,
  actFetchStoriesSucc,
  actFetchStoriesFail,
  actFetchCommentsReq,
  actFetchCommentsSucc,
  actFetchCommentsFail,
  actFetchStorySucc,
  actFetchRepliesReq,
  actFetchRepliesSucc,
  actFetchRepliesFail,
} from '../reducers-actions';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const STORIES_ID_URL = `${BASE_URL}/topstories.json`;
export const ITEM_URL = (itemID) => `${BASE_URL}/item/${itemID}.json`;

const errorMessages = {
  msgNoIds: 'Something went wrong, please try for few minutes!',
  msgNoData: 'Currently No stories available!',
  msgNoStory: "Some of stories isn't available!",
};

const isNotDataAvilable = (items) => {
  return items.length === 0 || items.every((story) => !story);
};
const isNotAllElementsAvilable = (items) => items.some((story) => !story);

const getFilteredElements = (stories, storiesIds) => {
  const filteredStories = stories.map((item, indexStory) => {
    if (!item) {
      return {
        id: storiesIds.filter((el, indexErr) => indexErr === indexStory)[0],
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

///////////////////////////////////////////////////////////////////////////////////////////

export const getReplies = (repliesIds) => async (dispatch) => {
  dispatch(actFetchRepliesReq());

  const responseComments = await getItems(repliesIds);

  dispatch(actFetchRepliesSucc(responseComments));
};

///////////////////////////////////////////////////////////////////////////////////////////

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

  if (isNotDataAvilable(responseStories)) {
    dispatch(actFetchStoriesFail(errorMessages.msgNoData));
    return;
  }

  if (isNotAllElementsAvilable(responseStories)) {
    dispatch(actFetchStoriesFail(errorMessages.msgNoStory));
    responseStories = getFilteredElements(responseStories, storyIds);
  }

  dispatch(actFetchStoriesSucc(responseStories));
};

///////////////////////////////////////////////////////////////////////////////////////////

export const getComments = (id) => async (dispatch) => {
  dispatch(actFetchCommentsReq());

  const apiStory = await fetch(ITEM_URL(id));

  if (!apiStory.ok) return;

  const responseStory = await apiStory.json();
  dispatch(actFetchStorySucc(responseStory));

  const commentsIds = responseStory.kids;

  let responseComments = await getItems(commentsIds);

  if (isNotAllElementsAvilable(responseComments)) {
    dispatch(actFetchCommentsFail('no comment avilable'));
    responseComments = getFilteredElements(responseComments, commentsIds);
  }

  console.log(responseComments);

  dispatch(actFetchCommentsSucc(responseComments));
};
