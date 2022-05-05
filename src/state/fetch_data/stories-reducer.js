const initialState = {
  items: [],
  loading: false,
  error: null,
};

//Reducer
export const storiesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case `FETCH_STORIES_REQUEST`:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case `FETCH_STORIES_SUCCESS`:
      return {
        ...state,
        loading: false,
        items: payload,
      };
    case `FETCH_STORIES_FAILURE`:
      return {
        ...state,
        loading: false,
        items: [],
        error: payload,
      };

    default:
      return state;
  }
};

//Action functions

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

export const actFetchStoriesFail = error => {
  return {
    type: `FETCH_STORIES_SUCCESS`,
    payload: error,
  };
};
