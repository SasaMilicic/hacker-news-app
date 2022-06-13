import { createAction, createReducer } from '@reduxjs/toolkit';

export const actFetchReply = createAction('replies/fetchReplies');
export const actRemoveUnrenderedReply = createAction(
  'replies/removeUnrenderedReply'
);

const initialState = {
  repliesData: [],
};

export const repliesReducer = createReducer(initialState, (builder) => {
  builder

    .addCase('replies/fetchReplies', (state, { payload }) => {
      state.repliesData.push(payload);
    })

    .addCase('replies/removeUnrenderedReply', (state, { payload }) => {
      const { repliesData } = state;

      state.repliesData = repliesData.filter((reply) => reply.id !== payload);
    });
});
