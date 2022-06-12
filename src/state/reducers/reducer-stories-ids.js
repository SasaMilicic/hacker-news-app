import { createAction, createReducer } from '@reduxjs/toolkit';

export const actFetchStoriesIdsReq = createAction('fetchStoriesIdsReq');
export const actFetchStoriesIdsSucc = createAction('fetchStoriesIdsSucc');
export const actFetchStoriesIdsFail = createAction('fetchStoriesIdsFail');

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
    });
});

// import { createAction, createReducer, current } from '@reduxjs/toolkit';

// export const actFetchStoriesReq = createAction('fetchStoriesReq');
// export const actFetchStoriesSucc = createAction('fetchStoriesSucc');
// export const actFetchStoriesFail = createAction('fetchStoriesFail');
// export const actNextPage = createAction('nextPage');
// export const actPrevPage = createAction('prevPage');

// const initialState = {
//   storiesData: [],
//   storiesRequest: false,
//   error: null,
//   NUM_ARTICLES: 30,
//   pageRange: { firstPageEl: 0, lastPageEl: 30 },
// };

// export const storiesReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase('fetchStoriesReq', (state) => {
//       state.storiesRequest = true;
//       state.error = null;
//     })

//     .addCase('fetchStoriesSucc', (state, { payload }) => {
//       state.storiesRequest = false;
//       state.storiesData = payload;
//     })

//     .addCase('fetchStoriesFail', (state, { payload }) => {
//       state.storiesRequest = false;
//       state.storiesData = [];
//       state.error = payload;
//     })

//     .addCase('nextPage', (state) => {
//       const {
//         storiesData,
//         NUM_ARTICLES,
//         pageRange: { firstPageEl },
//       } = state;

//       const checkLastPageEl = current(storiesData).length < NUM_ARTICLES;
//       const newFirstPageEl = checkLastPageEl
//         ? firstPageEl
//         : firstPageEl + NUM_ARTICLES;
//       const newLastPageEl = newFirstPageEl + NUM_ARTICLES;

//       state.pageRange.firstPageEl = newFirstPageEl;
//       state.pageRange.lastPageEl = newLastPageEl;
//     })

//     .addCase('prevPage', (state, action) => {
//       const {
//         NUM_ARTICLES,
//         pageRange: { firstPageEl },
//       } = state;

//       const checkFirstPageEl = firstPageEl === 0;
//       const newFirstPageEl = checkFirstPageEl
//         ? firstPageEl
//         : firstPageEl - state.NUM_ARTICLES;
//       const newLastPageEl = newFirstPageEl + NUM_ARTICLES;

//       state.pageRange.firstPageEl = newFirstPageEl;
//       state.pageRange.lastPageEl = newLastPageEl;
//     });
// });
