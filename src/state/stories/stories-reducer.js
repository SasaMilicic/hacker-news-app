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
        ...initialState,
        items: initialState.items.slice(
          initialState.index,
          initialState.index + 4
        ),
      };

    default:
      return state;
  }
};

//Actions
export const actChangePage = pageRange => {
  return {
    type: 'CHANGE_PAGE',
    payload: pageRange,
  };
};
