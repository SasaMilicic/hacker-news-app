import { createSlice } from '@reduxjs/toolkit';
import { initialState_fake } from './fake-init-state';

export const topStorySlice = createSlice({
  name: 'topStory',
  initialState: initialState_fake,
  reducers: {}, //just render - without reducers
});

export default topStorySlice.reducer;
