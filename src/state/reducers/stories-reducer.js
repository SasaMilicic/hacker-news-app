const initialState = {
  initItems: [],
  renderItems: [],
  loading: false,
  pageIndex: 0,
  pageNumber: 1,
  numArticles: 10,
};

const getNewItems = (initState, index, numArt) => {
  return [...initState].slice(index, index + numArt);
};

export const storiesReducer = (state = initialState, { type, payload }) => {
  const { initItems, pageIndex, numArticles } = state;
  let { pageNumber } = state;
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
        initItems: payload,
      };

    case 'START_PAGE': {
      const startItems = [...initItems].slice(0, numArticles);

      return {
        ...state,
        renderItems: startItems,
      };
    }

    case 'PREV_PAGE': {
      const checkIndex = pageIndex === 0;
      const newPrevPageIndex = checkIndex ? pageIndex : pageIndex - numArticles;
      const decrementPage = checkIndex ? pageNumber : pageNumber - 1;

      return {
        ...state,
        renderItems: getNewItems(initItems, newPrevPageIndex, numArticles),
        pageIndex: newPrevPageIndex,
        pageNumber: decrementPage,
      };
    }

    case 'NEXT_PAGE': {
      const checkIndex = pageIndex + numArticles >= initItems.length;
      const newNextPageIndex = checkIndex ? pageIndex : pageIndex + numArticles;
      const incrementPage = checkIndex ? pageNumber : pageNumber + 1;

      return {
        ...state,
        renderItems: getNewItems(initItems, newNextPageIndex, numArticles),
        pageIndex: newNextPageIndex,
        pageNumber: incrementPage,
      };
    }

    default:
      return state;
  }
};
