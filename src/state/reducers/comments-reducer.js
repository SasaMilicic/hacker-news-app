const initialState = {
  storyData: {},
  commentsData: [],
  commentsRequest: false,
  error: null,
};

export const commentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case `FETCH_COMMENTS_REQUEST`:
      return {
        ...state,
        commentsRequest: true,
        error: null,
      };

    case `FETCH_STORY_SUCCESS`:
      return {
        ...state,
        storyData: payload,
      };

    case `FETCH_COMMENTS_SUCCESS`:
      return {
        ...state,
        commentsRequest: false,
        commentsData: payload,
      };

    case `FETCH_COMMENTS_FAILURE`:
      return {
        ...state,
        commentsRequest: false,
        commentData: [],
        error: payload,
      };

    default:
      return state;
  }
};
