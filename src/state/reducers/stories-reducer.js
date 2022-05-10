const initialState = {
  items: [],
  loading: false,
  firstSliceIndex: 0,
  numArticles: 30,
};

export const storiesReducer = (state = initialState, { type, payload }) => {
  const { items, firstSliceIndex, numArticles } = state;

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

    case 'PREV_PAGE': {
      const checkIndex = firstSliceIndex === 0;
      const newPrevPageIndex = checkIndex
        ? firstSliceIndex
        : firstSliceIndex - numArticles;

      return {
        ...state,
        firstSliceIndex: newPrevPageIndex,
      };
    }

    case 'NEXT_PAGE': {
      const checkIndex = items.length < numArticles;
      const newNextPageIndex = checkIndex
        ? firstSliceIndex
        : firstSliceIndex + numArticles;

      return {
        ...state,
        firstSliceIndex: newNextPageIndex,
      };
    }

    default:
      return state;
  }
};
