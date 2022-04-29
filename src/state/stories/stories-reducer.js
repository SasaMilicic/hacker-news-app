import { items } from './fake-init-state';

const initialState = { items, index: 0 };
const numArticles = 4;

//Reducer
export const topStoryreducer = (
  state = {
    ...initialState,
    items: initialState.items.slice(
      initialState.index,
      initialState.index + numArticles
    ),
  },
  { type, payload }
) => {
  switch (type) {
    /* ************************************************************************** */
    case 'NEXT_PAGE': {
      state.index =
        state.index + numArticles > initialState.items.length
          ? state.index
          : state.index + numArticles;

      state.items = [
        ...initialState.items.slice(state.index, state.index + numArticles),
      ];

      return {
        ...state,
      };
    }
    /* ************************************************************************** */
    case 'PREV_PAGE': {
      state.index = state.index === 0 ? state.index : state.index - numArticles;

      state.items = [
        ...initialState.items.slice(state.index, state.index + numArticles),
      ];

      return {
        ...state,
      };
    }
    /* ************************************************************************** */

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
