export const convertTime = (time) => {
  return new Date(time).toUTCString().slice(5, 22);
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

export const selectRequest = ({ storiesRequest }) => storiesRequest;

export const selectPageRange = ({ pageRange: { firstPageEl, lastPageEl } }) => {
  return [firstPageEl, lastPageEl];
};

export const selectRenderStories = ({ storiesData }) => storiesData;

export const selectErrorMessage = ({ error }) => error;

/////////////////////////////////// Comments ///////////////////////////////////

export const selectCommentStory = ({ storyData }) => storyData;

export const selectComments = ({ commentsData }) => commentsData;
