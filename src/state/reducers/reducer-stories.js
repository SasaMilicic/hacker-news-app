import { createAction, createReducer } from '@reduxjs/toolkit';

export const actFetchStories = createAction('stories/fetchStories');
export const restartState = createAction('stories/restartState');

const initialState = {
  storiesData: [],
};

export const storiesReducer = createReducer(initialState, (builder) => {
  builder

    .addCase('stories/fetchStories', (state, { payload }) => {
      state.storiesData.push(payload);
    })

    .addCase('stories/restartState', (state) => {
      state.storiesData = initialState.storiesData;
    });
});
