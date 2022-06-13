import { createAction, createReducer } from '@reduxjs/toolkit';

export const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
export const ITEM_URL = (itemID) => `${BASE_URL}/item/${itemID}.json`;

const actFetchComment = createAction('comments/fetchComment');
export const actRestartCommentStata = createAction('comments/restartState');

const initialState = {
  commentsData: [],
};

export const commentsReducer = createReducer(initialState, (builder) => {
  builder

    .addCase('comments/fetchComment', (state, { payload }) => {
      state.commentsData.push(payload);
    })

    .addCase('comments/restartState', (state) => {
      state.commentsData = initialState.commentsData;
    });
});

////////////////////////////////////////////////////////////////////////////////////////////////

export const getComment = (id, loading) => async (dispatch) => {
  loading(true);

  const fetchArticle = await fetch(ITEM_URL(id));

  if (!fetchArticle.ok) {
    dispatch(actFetchComment(id));
    loading(false);
    return;
  }

  const responseItem = await fetchArticle.json();

  dispatch(actFetchComment(responseItem));

  loading(false);
};
