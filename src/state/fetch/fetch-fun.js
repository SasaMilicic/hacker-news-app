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
  msgNoStories: "Some of stories isn't available!",
  msgNoReply: "This Reply currently isn't available!",
  msgNoComment: "This Comment currently isn't available!",
  msgNoStory: "Story isn't available!",
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

export const getComments = (id) => async (dispatch) => {
  dispatch(actFetchCommentsReq());

  const apiStory = await fetch(ITEM_URL(id));

  if (!apiStory.ok) {
    dispatch(actFetchCommentsFail(errorMessages.msgNoStory));
    return;
  }

  const responseStory = await apiStory.json();
  dispatch(actFetchStorySucc(responseStory));

  const commentsIds = responseStory.kids;
  let responseComments = await getItems(commentsIds);

  if (isNotAllElementsAvilable(responseComments)) {
    dispatch(actFetchCommentsFail(errorMessages.msgNoComment));
    responseComments = getFilteredElements(responseComments, commentsIds);
  }

  dispatch(actFetchCommentsSucc(responseComments));
};

export const getReplies = (repliesIds) => async (dispatch) => {
  dispatch(actFetchRepliesReq());

  let responseReplies = await getItems(repliesIds);

  if (isNotAllElementsAvilable(responseReplies)) {
    dispatch(actFetchRepliesFail(errorMessages.msgNoReply));
    responseReplies = getFilteredElements(responseReplies, repliesIds);
  }

  dispatch(actFetchRepliesSucc(responseReplies));
};
