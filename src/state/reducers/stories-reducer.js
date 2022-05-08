const initialState = {
  initItems: [],
  renderItems: [],
  loading: false,
  pageIndex: 0,
  numArticles: 4,
};

const getNewItems = (initState, index, numArt) => {
  return [...initState].slice(index, index + numArt);
};

export const storiesReducer = (state = initialState, { type, payload }) => {
  const { initItems, renderItems, pageIndex, numArticles } = state;
  switch (type) {
    /////////////////////////////////////////////////////////////////////////
    case `FETCH_STORIES_REQUEST`:
      return {
        ...state,
        loading: true,
      };
    /////////////////////////////////////////////////////////////////////////
    case `FETCH_STORIES_SUCCESS`:
      return {
        ...state,
        loading: false,
        initItems: payload,
      };
    /////////////////////////////////////////////////////////////////////////
    case 'START_PAGE': {
      const startItems = [...initItems].slice(0, numArticles);

      return {
        ...state,
        renderItems: startItems,
      };
    }
    /////////////////////////////////////////////////////////////////////////
    case 'PREV_PAGE': {
      const newPrevPageIndex =
        pageIndex === 0 ? pageIndex : pageIndex - numArticles;

      return {
        ...state,
        pageIndex: newPrevPageIndex,
        renderItems: getNewItems(initItems, newPrevPageIndex, numArticles),
      };
    }
    /////////////////////////////////////////////////////////////////////////
    case 'NEXT_PAGE': {
      const newNextPageIndex =
        pageIndex + numArticles >= initItems.length
          ? pageIndex
          : pageIndex + numArticles;

      return {
        ...state,
        pageIndex: newNextPageIndex,
        items: getNewItems(initItems, newNextPageIndex, numArticles),
      };
    }
    /////////////////////////////////////////////////////////////////////////
    default:
      return state;
    /////////////////////////////////////////////////////////////////////////
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

export const actStartPage = () => {
  return {
    type: `START_PAGE`,
  };
};

export const actNextPage = () => {
  return {
    type: 'NEXT_PAGE',
  };
};
export const actPrevPage = () => {
  return {
    type: 'PREV_PAGE',
  };
};
