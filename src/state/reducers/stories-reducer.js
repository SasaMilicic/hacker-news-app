const initialState = {
  items: [],
  isLoading: false,
  firstPageEl: 0,
  lastPageEl: 30,
};

export const storiesReducer = (state = initialState, { type, payload }) => {
  const { items, firstPageEl, lastPageEl } = state;

  switch (type) {
    case `FETCH_STORIES_REQUEST`:
      return {
        ...state,
        isLoading: true,
      };

    case `FETCH_STORIES_SUCCESS`:
      return {
        ...state,
        isLoading: false,
        items: payload,
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
      const checkLastPageEl = items.length < lastPageEl;
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
