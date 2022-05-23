const initialState = {
  storiesData: [],
  storiesRequest: false,
  error: null,
  NUM_ARTICLES: 30,
  pageRange: { firstPageEl: 0, lastPageEl: 30 },
};

export const storiesReducer = (state = initialState, { type, payload }) => {
  const {
    storiesData,
    NUM_ARTICLES,
    pageRange: { firstPageEl },
  } = state;

  switch (type) {
    case `FETCH_STORIES_REQUEST`:
      return {
        ...state,
        storiesRequest: true,
        error: null,
      };

    case `FETCH_STORIES_SUCCESS`:
      return {
        ...state,
        storiesRequest: false,
        storiesData: payload,
      };

    case `FETCH_STORIES_FAILURE`:
      return {
        ...state,
        storiesRequest: false,
        storiesData: [],
        error: payload,
      };

    case 'PREV_PAGE': {
      const checkFirstPageEl = firstPageEl === 0;
      const newFirstPageEl = checkFirstPageEl
        ? firstPageEl
        : firstPageEl - NUM_ARTICLES;
      const newLastPageEl = newFirstPageEl + NUM_ARTICLES;

      return {
        ...state,
        pageRange: {
          ...state.pageRange,
          firstPageEl: newFirstPageEl,
          lastPageEl: newLastPageEl,
        },
      };
    }

    case 'NEXT_PAGE': {
      const checkLastPageEl = storiesData.length < NUM_ARTICLES;
      const newFirstPageEl = checkLastPageEl
        ? firstPageEl
        : firstPageEl + NUM_ARTICLES;
      const newLastPageEl = newFirstPageEl + NUM_ARTICLES;

      return {
        ...state,
        pageRange: {
          ...state.pageRange,
          firstPageEl: newFirstPageEl,
          lastPageEl: newLastPageEl,
        },
      };
    }

    default:
      return state;
  }
};
