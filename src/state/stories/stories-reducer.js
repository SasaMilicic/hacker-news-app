import { items } from './fake-init-state';

const initialState = { items, index: 0 };

//Reducer
export const topStoryreducer = (
  state = {
    ...initialState,
    items: initialState.items.slice(initialState.index, initialState.index + 4),
  },
  { type, payload }
) => {
  switch (type) {
    case 'CHANGE_PAGE':
      return {
        ...state,
        items: [...initialState.items.slice(state.index, state.index + 4)],
      };

    case 'INCREMENT_INDEX':
      return {
        ...state,
        index:
          state.index + 4 > initialState.items.length
            ? state.index
            : state.index + 4,
      };

    case 'DECREMENT_INDEX':
      return {
        ...state,
        index: state.index === 0 ? state.index : state.index - 4,
      };

    default:
      return state;
  }
};

//Actions
export const actChangePage = () => {
  return {
    type: 'CHANGE_PAGE',
  };
};

export const actIncrementIndex = () => {
  return {
    type: 'INCREMENT_INDEX',
  };
};

export const actDecrementIndex = () => {
  return {
    type: 'DECREMENT_INDEX',
  };
};
