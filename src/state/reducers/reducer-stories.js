import { createAction, createReducer } from '@reduxjs/toolkit';

export const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
export const ITEM_URL = (itemID) => `${BASE_URL}/item/${itemID}.json`;

export const actFetchStories = createAction('stories/fetchStories');
export const restartState = createAction('stories/restartState');

const initialState = {
  storiesData: [],
};

export const storiesReducer = createReducer(initialState, (builder) => {
  builder

    .addCase('stories/fetchStories', (state, { payload }) => {
      state.storiesData.push(payload);
    })

    .addCase('stories/restartState', (state) => {
      state.storiesData = initialState.storiesData;
    });
});

////////////////////////////////////////////////////////////////////////////////////////////////

export const getStories = (id, loading) => async (dispatch) => {
  dispatch(restartState());

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