import { configureStore } from '@reduxjs/toolkit';
import topStoryReducer from './features/top-story-slice';

export const store = configureStore({
  reducer: {
    topStory: topStoryReducer,
  },
});
