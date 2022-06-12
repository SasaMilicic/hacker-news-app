import { createAction, createReducer } from '@reduxjs/toolkit';

export const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
export const ITEM_URL = (itemID) => `${BASE_URL}/item/${itemID}.json`;

export const actFetchStories = createAction('fetchStories');

const initialState = {
  storiesData: [],
};

export const storiesReducer = createReducer(initialState, (builder) => {
  builder.addCase('fetchStories', (state, { payload }) => {
    state.storiesData.push(payload);
  });
});

export const getItem = (id, loading) => async (dispatch) => {
  loading(true);

  const fetchArticle = await fetch(ITEM_URL(id));
  if (!fetchArticle.ok) {
    dispatch(actFetchStories(id));
    loading(false);
    return;
  }

  const responseItem = await fetchArticle.json();

  dispatch(actFetchStories(responseItem));
  loading(false);
};
