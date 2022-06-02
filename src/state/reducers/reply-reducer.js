const initialState = {
  repliesData: [],
  repliesRequest: false,
  error: null,
};

export const repliesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case `FETCH_REPLIES_REQUEST`:
      return {
        ...state,
        repliesRequest: true,
        error: null,
      };

    case `FETCH_REPLIES_SUCCESS`:
      const addNewReply = [...state.repliesData, ...payload];

      return {
        ...state,
        repliesRequest: false,
        repliesData: addNewReply,
      };

    case `FETCH_REPLIES_FAILURE`:
      return {
        ...state,
        commentsRequest: false,
        repliesData: [],
        error: payload,
      };

    case `REMOVE_UNRENDERED_REPLIES`:
      const filteredReplies = [
        ...state.repliesData.filter((reply) => !payload.includes(reply.id)),
      ];

      return {
        ...state,
        repliesData: filteredReplies,
      };

    default:
      return state;
  }
};
