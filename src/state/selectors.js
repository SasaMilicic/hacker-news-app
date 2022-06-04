export const convertTime = (time) => {
  return new Date(time * 1000).toUTCString().slice(5, 22);
};

export const isContainesJustId = (element) => {
  const { id, ...others } = element;
  return Object.keys(others).length === 0;
};

/////////////////////////////////// Stories  ///////////////////////////////////

export const calcPageNumber = ({
  NUM_ARTICLES,
  pageRange: { firstPageEl },
}) => {
  return Math.ceil(firstPageEl / NUM_ARTICLES) + 1;
};

export const calcOrdinalNumber = ({ pageRange: { firstPageEl } }) => {
  return firstPageEl + 1;
};

export const selectStoryRequest = ({ storiesRequest }) => storiesRequest;

export const selectPageRange = ({ pageRange: { firstPageEl, lastPageEl } }) => {
  return [firstPageEl, lastPageEl];
};

export const selectStories = ({ storiesData }) => storiesData;

export const selectErrorMessage = ({ error }) => error;

/////////////////////////////////// Comments ///////////////////////////////////

export const selectCommentStory = ({ storyData }) => storyData;

export const selectCommRequest = ({ commentsRequest }) => commentsRequest;

export const selectComments = ({ commentsData }) => commentsData;

/////////////////////////////////// Replies ///////////////////////////////////

export const selectReplies = ({ repliesData }) => repliesData;
