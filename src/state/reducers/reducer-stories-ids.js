import { createAction, createReducer } from '@reduxjs/toolkit';

export const actFetchStoriesIdsReq = createAction('fetchStoriesIdsReq');
export const actFetchStoriesIdsSucc = createAction('fetchStoriesIdsSucc');
export const actFetchStoriesIdsFail = createAction('fetchStoriesIdsFail');

const initialState = {
  storiesIdsData: [],
  storiesIdsRequest: false,
  errorIds: null,
};

export const reducerStoriesIds = createReducer(initialState, (builder) => {
  builder
    .addCase('fetchStoriesIdsReq', (state) => {
      state.storiesIdsRequest = true;
      state.errorIds = null;
    })

    .addCase('fetchStoriesIdsSucc', (state, { payload }) => {
      state.storiesIdsRequest = false;
      state.storiesIdsData = payload;
    })

    .addCase('fetchStoriesIdsFail', (state, { payload }) => {
      state.storiesIdsRequest = false;
      state.storiesIdsData = [];
      state.errorIds = payload;
    });
});
