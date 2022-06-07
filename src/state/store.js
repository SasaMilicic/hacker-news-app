import { configureStore } from '@reduxjs/toolkit';

import { storiesReducer } from './reducers/stories-reducer';
import { commentsReducer } from './reducers/comments-reducer';
import { repliesReducer } from './reducers/reply-reducer';

export const store = configureStore({
  reducer: {
    stories: storiesReducer,
    comments: commentsReducer,
    replies: repliesReducer,
  },
});
