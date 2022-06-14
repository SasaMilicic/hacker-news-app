import { createAction, createReducer } from '@reduxjs/toolkit';

export const actFetchComment = createAction('comments/fetchComment');
export const actFetchCommentStory = createAction('comments/fetchCommentStory');
export const actRestartCommentState = createAction('comments/restartState');

const initialState = {
  storyData: {},
  commentsData: [],
};

export const commentsReducer = createReducer(initialState, (builder) => {
  builder

    .addCase('comments/fetchComment', (state, { payload }) => {
      state.commentsData.push(payload);
    })

    .addCase('comments/fetchCommentStory', (state, { payload }) => {
      state.storyData = payload;
    })

    .addCase('comments/restartState', (state) => {
      state.storyData = initialState.storyData;
      state.commentsData = initialState.commentsData;
    });
});
