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

export const actFetchStoriesReq = () => {
  return {
    type: `FETCH_STORIES_REQUEST`,
  };
};

export const actFetchStoriesSucc = (response) => {
  return {
    type: `FETCH_STORIES_SUCCESS`,
    payload: response,
  };
};
