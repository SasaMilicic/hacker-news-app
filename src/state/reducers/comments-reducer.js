const initialState = {
  commentData: {},
  commentRequest: false,
  error: null,
};

export const commentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case `FETCH_COMMENT_REQUEST`:
      return {
        ...state,
        commentsRequest: true,
        error: null,
      };

    case `FETCH_COMMENT_SUCCESS`:
      return {
        ...state,
        commentRequest: false,
        commentData: payload,
      };

    case `FETCH_COMMENT_FAILURE`:
      return {
        ...state,
        commentRequest: false,
        commentData: {},
        error: payload,
      };

    default:
      return state;
  }
};
