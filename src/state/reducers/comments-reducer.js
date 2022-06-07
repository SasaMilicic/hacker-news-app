import { createAction, createReducer } from '@reduxjs/toolkit';

export const actFetchCommentsReq = createAction('fetchCommentsReq');
export const actFetchCommentsSucc = createAction('fetchCommentsSucc');
export const actFetchStorySucc = createAction('fetchStorySucc');
export const actFetchCommentsFail = createAction('fetchCommentsFail');

const initialState = {
  storyData: {},
  commentsData: [],
  commentsRequest: false,
  error: null,
};

export const commentsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('fetchCommentsReq', (state) => {
      state.commentsRequest = true;
      state.error = null;
    })

    .addCase('fetchStorySucc', (state, { payload }) => {
      state.storyData = payload;
    })

    .addCase('fetchCommentsSucc', (state, { payload }) => {
      state.commentsRequest = false;
      state.commentsData = payload;
    })

    .addCase('fetchCommentsFail', (state, { payload }) => {
      state.commentsRequest = false;
      state.commentsData = [];
      state.error = payload;
    });
});
