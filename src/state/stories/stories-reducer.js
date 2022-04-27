import { initialState } from './fake-init-state';

//Reducer
export const topStoryreducer = (
  state = initialState.slice(0, 4),
  { type, payload }
) => {
  switch (type) {
    case 'CHANGE_PAGE':
      const { fromIndex, toIndex } = payload;
      return initialState.slice(fromIndex, toIndex);

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
