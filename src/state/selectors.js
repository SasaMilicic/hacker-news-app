/////////////////////////////////// StoriesIds  ///////////////////////////////////

export const selectStoriesIds = (state) => state.storiesIds.storiesIdsData;

/////////////////////////////////// Stories  ///////////////////////////////////

export const calcPageNumber = (state) => {
  const {
    NUM_ARTICLES,
    pageRange: { firstPageEl },
  } = state.stories;

  return Math.ceil(firstPageEl / NUM_ARTICLES) + 1;
};

export const calcOrdinalNumber = (state) => {
  return state.stories.pageRange.firstPageEl + 1;
};

// export const selectStoryRequest = (state) => state.stories.storiesRequest;

export const selectPageRange = (state) => {
  const { firstPageEl, lastPageEl } = state.stories.pageRange;

  return [firstPageEl, lastPageEl];
};

export const selectStories = (state) => state.stories.storiesData;

export const selectErrorStories = (state) => state.stories.error;

/////////////////////////////////// Comments ///////////////////////////////////

export const selectCommentStory = (state) => state.comments.storyData;

export const selectCommRequest = (state) => state.comments.commentsRequest;

export const selectComments = (state) => state.comments.commentsData;

export const selectErrorComments = (state) => state.comments.error;

/////////////////////////////////// Replies ///////////////////////////////////

export const selectReplies = (state) => state.replies.repliesData;

export const selectErrorReplies = (state) => state.replies.error;
