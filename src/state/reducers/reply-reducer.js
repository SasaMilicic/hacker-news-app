import { createAction, createReducer } from '@reduxjs/toolkit';

export const actFetchRepliesReq = createAction('fetchRepliesReq');
export const actFetchRepliesSucc = createAction('fetchRepliesSucc');
export const actFetchRepliesFail = createAction('fetchRepliesFail');
export const actRestartState = createAction('restartState');

const initialState = {
  repliesData: [],
  repliesRequest: false,
  error: null,
};

export const repliesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('fetchRepliesReq', (state) => {
      state.repliesRequest = true;
      state.error = null;
    })

    .addCase('fetchRepliesSucc', (state, { payload }) => {
      const { repliesData } = state;

      const addNewReply = [...repliesData, ...payload];

      state.repliesRequest = false;
      state.repliesData = addNewReply;
    })

    .addCase('fetchRepliesFail', (state, { payload }) => {
      state.commentsRequest = false;
      state.repliesData = [];
      state.error = payload;
    })

    .addCase('restartState', (state) => {
      state = initialState;
    });
});
