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

//Reducer
export const topStoryreducer = (state = firstPage, { type, payload }) => {
  const getItems = index => {
    return initialState.items.slice(index, index + numArticles);
  };

  switch (type) {
    case 'NEXT_PAGE': {
      const pageIndex = (state.pageIndex =
        state.pageIndex + numArticles > initialState.items.length
          ? state.pageIndex
          : state.pageIndex + numArticles);

      return {
        ...state,
        pageIndex,
        items: getItems(state.pageIndex),
      };
    }

    case 'PREV_PAGE': {
      const pageIndex = (state.pageIndex =
        state.pageIndex === 0
          ? state.pageIndex
          : state.pageIndex - numArticles);

      return {
        ...state,
        pageIndex,
        items: getItems(state.pageIndex),
      };
    }

    default:
      return state;
  }
};

//Actions
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
