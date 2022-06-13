import { createAction, createReducer } from '@reduxjs/toolkit';

export const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
export const ITEM_URL = (itemID) => `${BASE_URL}/item/${itemID}.json`;

const actFetchReply = createAction('replies/fetchReplies');
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

////////////////////////////////////////////////////////////////////////////////////////////////

export const getReply = (id, loading) => async (dispatch) => {
  loading(true);

  console.log(id);

  const fetchArticle = await fetch(ITEM_URL(id));

  if (!fetchArticle.ok) {
    dispatch(actFetchReply(id));
    loading(false);
    return;
  }

  const responseItem = await fetchArticle.json();

  dispatch(actFetchReply(responseItem));

  loading(false);
};
