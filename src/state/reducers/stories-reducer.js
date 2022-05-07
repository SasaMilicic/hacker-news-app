const initialState = {
  items: [],
  loading: false,
};

export const storiesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case `FETCH_STORIES_REQUEST`:
      return {
        ...state,
        loading: true,
      };
    case `FETCH_STORIES_SUCCESS`:
      return {
        ...state,
        loading: false,
        items: payload,
      };

    default:
      return state;
  }
};

export const actFetchStoriesReq = () => {
  return {
    type: `FETCH_STORIES_REQUEST`,
  };
};
export const actFetchStoriesSucc = response => {
  return {
    type: `FETCH_STORIES_SUCCESS`,
    payload: response,
  };
};
