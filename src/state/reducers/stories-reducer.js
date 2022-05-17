const initialState = {
  stories: [],
  storiesRequest: false,
  pageRange: { firstPageEl: 0, lastPageEl: 30 },
};

export const storiesReducer = (state = initialState, { type, payload }) => {
  const {
    stories,
    pageRange: { firstPageEl, lastPageEl },
  } = state;

  switch (type) {
    case `FETCH_STORIES_REQUEST`:
      return {
        ...state,
        storiesRequest: true,
      };

    case `FETCH_STORIES_SUCCESS`:
      return {
        ...state,
        storiesRequest: false,
        stories: payload,
      };

    case 'PREV_PAGE': {
      const checkFirstPageEl = firstPageEl === 0;
      const newFirstPageEl = checkFirstPageEl
        ? firstPageEl
        : firstPageEl - lastPageEl;

      return {
        ...state,
        firstPageEl: newFirstPageEl,
      };
    }

    case 'NEXT_PAGE': {
      const checkLastPageEl = stories.length < lastPageEl;
      const newFirstPageEl = checkLastPageEl
        ? firstPageEl
        : firstPageEl + lastPageEl;

      return {
        ...state,
        firstPageEl: newFirstPageEl,
      };
    }

    default:
      return state;
  }
};
