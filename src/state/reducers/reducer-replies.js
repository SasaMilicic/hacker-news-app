import { createAction, createReducer } from '@reduxjs/toolkit';

export const actFetchRepliesReq = createAction('replies/fetchReq');
export const actFetchRepliesSucc = createAction('replies/fetchSucc');
export const actFetchRepliesFail = createAction('replies/fetchFail');
export const actRestartState = createAction('replies/restartState');

const initialState = {
  repliesData: [],
  repliesRequest: false,
  error: null,
};

export const repliesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('replies/fetchReq', (state) => {
      state.repliesRequest = true;
      state.error = null;
    })

    .addCase('replies/fetchSucc', (state, { payload }) => {
      const { repliesData } = state;

      const addNewReply = [...repliesData, ...payload];

      state.repliesRequest = false;
      state.repliesData = addNewReply;
    })

    .addCase('replies/fetchFail', (state, { payload }) => {
      state.commentsRequest = false;
      state.repliesData = [];
      state.error = payload;
    })

    .addCase('replies/restartState', (state) => {
      state = initialState;
    });
});
