import { createAction, createReducer, current } from '@reduxjs/toolkit';

export const actFetchStoriesReq = createAction('stories/fetchStoriesReq');
export const actFetchStoriesSucc = createAction('stories/fetchStoriesSucc');
export const actFetchStoriesFail = createAction('stories/fetchStoriesFail');
export const actNextPage = createAction('stories/nextPage');
export const actPrevPage = createAction('stories/prevPage');

const initialState = {
  storiesData: [],
  storiesRequest: false,
  error: null,
  NUM_ARTICLES: 30,
  pageRange: { firstPageEl: 0, lastPageEl: 30 },
};

export const storiesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actFetchStoriesReq, (state) => {
      state.storiesRequest = true;
      state.error = null;
    })

    .addCase(actFetchStoriesSucc, (state, { payload }) => {
      state.storiesRequest = false;
      state.storiesData = payload;
    })

    .addCase(actFetchStoriesFail, (state, { payload }) => {
      state.storiesRequest = false;
      state.storiesData = [];
      state.error = payload;
    })

    .addCase(actNextPage, (state) => {
      const {
        storiesData,
        NUM_ARTICLES,
        pageRange: { firstPageEl },
      } = state;

      const checkLastPageEl = current(storiesData).length < NUM_ARTICLES;
      const newFirstPageEl = checkLastPageEl
        ? firstPageEl
        : firstPageEl + NUM_ARTICLES;
      const newLastPageEl = newFirstPageEl + NUM_ARTICLES;

      state.pageRange.firstPageEl = newFirstPageEl;
      state.pageRange.lastPageEl = newLastPageEl;
    })

    .addCase(actPrevPage, (state, action) => {
      const {
        NUM_ARTICLES,
        pageRange: { firstPageEl },
      } = state;

      const checkFirstPageEl = firstPageEl === 0;
      const newFirstPageEl = checkFirstPageEl
        ? firstPageEl
        : firstPageEl - state.NUM_ARTICLES;
      const newLastPageEl = newFirstPageEl + NUM_ARTICLES;

      state.pageRange.firstPageEl = newFirstPageEl;
      state.pageRange.lastPageEl = newLastPageEl;
    });
});
