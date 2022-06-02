const actFetchReq = (item) => () => {
  return {
    type: `FETCH_${item}_REQUEST`,
  };
};

const actFetchSucc = (item) => (response) => {
  return {
    type: `FETCH_${item}_SUCCESS`,
    payload: response,
  };
};

const actFetchFail = (item) => (response) => {
  return {
    type: `FETCH_${item}_FAILURE`,
    payload: response,
  };
};

//////////////////////////////////////////////////////////////

export const actFetchStoriesReq = actFetchReq('STORIES');
export const actFetchStoriesSucc = actFetchSucc('STORIES');
export const actFetchStoriesFail = actFetchFail('STORIES');

export const actFetchRepliesReq = actFetchReq('REPLIES');
export const actFetchRepliesSucc = actFetchSucc('REPLIES');
export const actFetchRepliesFail = actFetchFail('REPLIES');
export const actRemoveUnRenderedReplies = () => {
  return {
    type: `REMOVE_UNRENDERED_REPLIES`,
  };
};

export const actFetchCommentsReq = actFetchReq('COMMENTS');
export const actFetchCommentsSucc = actFetchSucc('COMMENTS');
export const actFetchCommentsFail = actFetchFail('COMMENTS');
export const actFetchStorySucc = (response) => {
  return {
    type: `FETCH_STORY_SUCCESS`,
    payload: response,
  };
};

//////////////////////////////////////////////////////////////

export const actNextPage = () => {
  return {
    type: 'NEXT_PAGE',
  };
};

export const actPrevPage = () => {
  return {
    type: 'PREV_PAGE',
  };
};
