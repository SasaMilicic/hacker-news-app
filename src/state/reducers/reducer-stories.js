import { createAction, createReducer } from '@reduxjs/toolkit';

export const actFetchStory = createAction('stories/fetchStory');
export const actRestartStoriesState = createAction('stories/restartState');

const initialState = {
  storiesData: [],
};

export const storiesReducer = createReducer(initialState, (builder) => {
  builder

    .addCase('stories/fetchStory', (state, { payload }) => {
      state.storiesData.push(payload);
    })

    .addCase('stories/restartState', (state) => {
      state.storiesData = initialState.storiesData;
    });
});
