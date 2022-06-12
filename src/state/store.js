import { configureStore } from '@reduxjs/toolkit';
import { reducerStoriesIds } from './reducers/reducer-stories-ids';
import { storiesReducer } from './reducers/reducer-stories';
import { commentsReducer } from './reducers/reducer-comments';

export const store = configureStore({
  reducer: {
    storiesIds: reducerStoriesIds,
    stories: storiesReducer,
    comments: commentsReducer,
  },
});
