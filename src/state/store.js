import { configureStore } from '@reduxjs/toolkit';
import { reducerStoriesIds } from './reducers/reducer-stories-ids';
import { storiesReducer } from './reducers/reducer-stories';
import { commentsReducer } from './reducers/reducer-comments';
import { repliesReducer } from './reducers/reducer-replies';

export const store = configureStore({
  reducer: {
    storiesIds: reducerStoriesIds,
    stories: storiesReducer,
    comments: commentsReducer,
    replies: repliesReducer,
  },
});
