import { configureStore } from '@reduxjs/toolkit';
import { reducerStoriesIds } from './reducers/reducer-stories-ids';

export const store = configureStore({
  reducer: {
    storiesIds: reducerStoriesIds,
  },
});
