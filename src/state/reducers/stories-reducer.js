const initialState = {
  initItems: [],
  items: [],
  loading: false,
  pageIndex: 0,
  numArticles: 4,
};

const getNewItems = (initState, index, numArt) => {
  return [...initState].slice(index, index + numArt);
};

export const storiesReducer = (state = initialState, { type, payload }) => {
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
      const startItems = [...state.initItems].slice(0, state.numArticles);

      return {
        ...state,
        items: startItems,
      };
    }
    /////////////////////////////////////////////////////////////////////////
    case 'PREV_PAGE': {
      const newPrevPageIndex =
        state.pageIndex === 0
          ? state.pageIndex
          : state.pageIndex - state.numArticles;

      return {
        ...state,
        pageIndex: newPrevPageIndex,
        items: getNewItems(
          state.initItems,
          newPrevPageIndex,
          state.numArticles
        ),
      };
    }
    /////////////////////////////////////////////////////////////////////////
    case 'NEXT_PAGE': {
      const newNextPageIndex =
        state.pageIndex + state.numArticles >= state.initItems.length
          ? state.pageIndex
          : state.pageIndex + state.numArticles;

      return {
        ...state,
        pageIndex: newNextPageIndex,
        items: getNewItems(
          state.initItems,
          newNextPageIndex,
          state.numArticles
        ),
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
