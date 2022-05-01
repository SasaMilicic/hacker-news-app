import { items } from './fake-init-state';

const initialState = { items, pageIndex: 0 };
const numArticles = 4;

const firstPage = {
  ...initialState,
  items: initialState.items.slice(
    initialState.pageIndex,
    initialState.pageIndex + numArticles
  ),
};

const getNewItems = index => {
  return initialState.items.slice(index, index + numArticles);
};

//Reducer
export const topStoryreducer = (state = firstPage, { type, payload }) => {
  switch (type) {
    case 'NEXT_PAGE': {
      //////////////////////////////////////////////////////////////////////////
      const newNextPageIndex =
        state.pageIndex + numArticles > initialState.items.length
          ? state.pageIndex
          : state.pageIndex + numArticles;
      //////////////////////////////////////////////////////////////////////////
      return {
        ...state,
        pageIndex: newNextPageIndex,
        items: getNewItems(newNextPageIndex),
      };
    }

    case 'PREV_PAGE': {
      //////////////////////////////////////////////////////////////////////////
      const newPrevPageIndex =
        state.pageIndex === 0 ? state.pageIndex : state.pageIndex - numArticles;
      //////////////////////////////////////////////////////////////////////////
      return {
        ...state,
        pageIndex: newPrevPageIndex,
        items: getNewItems(newPrevPageIndex),
      };
    }

    default:
      return state;
  }
};
