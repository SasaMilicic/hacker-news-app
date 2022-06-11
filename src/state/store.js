import { configureStore } from '@reduxjs/toolkit';
import { reducerStoriesIds } from './reducers/reducer-stories-ids';
import { storiesReducer } from './reducers/stories-reducer';

export const store = configureStore({
  reducer: {
    storiesIds: reducerStoriesIds,
    stories: storiesReducer,
  },
});
