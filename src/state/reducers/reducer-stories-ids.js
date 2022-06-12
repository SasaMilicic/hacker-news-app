import { createAction, createReducer, current } from '@reduxjs/toolkit';

export const actFetchStoriesIdsReq = createAction('fetchStoriesIdsReq');
export const actFetchStoriesIdsSucc = createAction('fetchStoriesIdsSucc');
export const actFetchStoriesIdsFail = createAction('fetchStoriesIdsFail');
export const actNextPage = createAction('nextPage');
export const actPrevPage = createAction('prevPage');

const initialState = {
  storiesIdsData: [],
  storiesIdsRequest: false,
  errorIds: null,
  NUM_ARTICLES: 30,
  pageRange: { firstPageEl: 0, lastPageEl: 30 },
};

export const reducerStoriesIds = createReducer(initialState, (builder) => {
  builder
    .addCase('fetchStoriesIdsReq', (state) => {
      state.storiesIdsRequest = true;
      state.errorIds = null;
    })

    .addCase('fetchStoriesIdsSucc', (state, { payload }) => {
      state.storiesIdsRequest = false;
      state.storiesIdsData = payload;
    })

    .addCase('fetchStoriesIdsFail', (state, { payload }) => {
      state.storiesIdsRequest = false;
      state.storiesIdsData = [];
      state.errorIds = payload;
    })

    .addCase('nextPage', (state) => {
      const {
        storiesIdsData,
        NUM_ARTICLES,
        pageRange: { firstPageEl },
      } = state;

      const checkLastPageEl = current(storiesIdsData).length < NUM_ARTICLES;
      const newFirstPageEl = checkLastPageEl
        ? firstPageEl
        : firstPageEl + NUM_ARTICLES;
      const newLastPageEl = newFirstPageEl + NUM_ARTICLES;

      state.pageRange.firstPageEl = newFirstPageEl;
      state.pageRange.lastPageEl = newLastPageEl;
    })

    .addCase('prevPage', (state) => {
      const {
        NUM_ARTICLES,
        pageRange: { firstPageEl },
      } = state;

      const checkFirstPageEl = firstPageEl === 0;
      const newFirstPageEl = checkFirstPageEl
        ? firstPageEl
        : firstPageEl - NUM_ARTICLES;
      const newLastPageEl = newFirstPageEl + NUM_ARTICLES;

      state.pageRange.firstPageEl = newFirstPageEl;
      state.pageRange.lastPageEl = newLastPageEl;
    });
});
