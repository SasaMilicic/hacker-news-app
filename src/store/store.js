import { configureStore } from '@reduxjs/toolkit';
import TopStoryReducer from './features/top-story-slice';

export const store = configureStore({
  reducer: {
    topStory: TopStoryReducer,
  },
});
