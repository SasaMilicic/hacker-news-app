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

export const actFetchCommentReq = actFetchReq('COMMENT');
export const actFetchCommentSucc = actFetchSucc('COMMENT');
export const actFetchCommentFail = actFetchFail('COMMENT');

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
