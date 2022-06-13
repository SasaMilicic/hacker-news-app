import { createAction, createReducer } from '@reduxjs/toolkit';

export const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
export const ITEM_URL = (itemID) => `${BASE_URL}/item/${itemID}.json`;

const actFetchComment = createAction('comments/fetchComment');
const actFetchCommentStory = createAction('comments/fetchCommentStory');
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
      state = initialState;
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

export const getStory = (id, loading) => async (dispatch) => {
  loading(true);

  const fetchArticle = await fetch(ITEM_URL(id));

  if (!fetchArticle.ok) {
    dispatch(actFetchCommentStory(id));
    loading(false);
    return;
  }

  const responseItem = await fetchArticle.json();

  dispatch(actFetchCommentStory(responseItem));

  loading(false);
};
