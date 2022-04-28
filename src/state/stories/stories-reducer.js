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
    case 'NEXT_PAGE':
      return {
        ...state,
        index:
          state.index + numArticles > initialState.items.length
            ? state.index
            : state.index + numArticles,

        items: [
          ...initialState.items.slice(state.index, state.index + numArticles),
        ],
      };

    case 'PREV_PAGE':
      return {
        ...state,
        index: state.index === 0 ? state.index : state.index - numArticles,

        items: [
          ...initialState.items.slice(state.index, state.index + numArticles),
        ],
      };

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
