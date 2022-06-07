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

export const actFetchRepliesReq = actFetchReq('REPLIES');
export const actFetchRepliesSucc = actFetchSucc('REPLIES');
export const actFetchRepliesFail = actFetchFail('REPLIES');
export const actRestartState = () => {
  return {
    type: 'RESTART_STATE',
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
