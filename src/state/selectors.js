/////////////////////////////////// StoriesIds  ///////////////////////////////////

export const selectStoriesIds = (state) => {
  const { firstPageEl, lastPageEl } = state.storiesIds.pageRange;

  return state.storiesIds.storiesIdsData.slice(firstPageEl, lastPageEl);
};

/* ---------------------------------------------------------------------------- */

export const selectStory = (state, id) => {
  const { storiesData } = state.stories;

  const story = storiesData.filter((story) => story.id === id);

  return story[0];
};

export const selectComment = (state, id) => {
  const { commentsData } = state.comments;

  const comment = commentsData.filter((comment) => comment.id === id);

  return comment[0];
};

/* ---------------------------------------------------------------------------- */

export const calcOrdinalNumber = (state, StoryId) => {
  const { storiesIdsData } = state.storiesIds;

  const oridinalNumber = storiesIdsData.indexOf(StoryId);

  return oridinalNumber + 1;
};

export const checkStoriesFilled = (state) => {
  const {
    stories: { storiesData },
    storiesIds: { NUM_ARTICLES },
  } = state;

  return storiesData.length === NUM_ARTICLES;
};

export const selectCommentsStory = (state) => state.comments.storyData;

/////////////////////////////////// Stories  ///////////////////////////////////

export const calcPageNumber = (state) => {
  const {
    pageRange: { firstPageEl },
    NUM_ARTICLES,
  } = state.storiesIds;

  return Math.ceil(firstPageEl / NUM_ARTICLES) + 1;
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
