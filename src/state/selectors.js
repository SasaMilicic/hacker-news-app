////////////////////////////// CALCULATION AND CHECK //////////////////////////////

export const calcPageNumber = (state) => {
  const {
    pageRange: { firstPageEl },
    NUM_ARTICLES,
  } = state.storiesIds;

  return Math.ceil(firstPageEl / NUM_ARTICLES) + 1;
};

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

////////////////////////////////// S E L E C T //////////////////////////////////

export const selectCommentsStory = (state) => state.comments.storyData;

export const selectStoriesIds = (state) => state.storiesIds.storiesIdsData;

export const selectPageRange = (state) => {
  const { firstPageEl, lastPageEl } = state.stories.pageRange;

  return [firstPageEl, lastPageEl];
};

export const selectRenderStoriesIds = (state) => {
  const { firstPageEl, lastPageEl } = state.storiesIds.pageRange;

  return state.storiesIds.storiesIdsData.slice(firstPageEl, lastPageEl);
};

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

export const selectReply = (state, id) => {
  const { repliesData } = state.replies;
  const reply = repliesData.filter((reply) => reply.id === id);
  return reply[0];
};

///////////////////////////////////////////////////////////////////////////////
