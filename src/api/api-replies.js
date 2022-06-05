import {
  actFetchRepliesReq,
  actFetchRepliesSucc,
  actFetchRepliesFail,
} from '../state/reducers-actions';

import {
  getItems,
  isNotAllElementsAvilable,
  getFilteredElements,
} from './../utils/api-utils';

const errorMessages = {
  msgNoIds: 'Something went wrong, please try for few minutes!',
  msgNoData: 'Currently No stories available!',
  msgNoStories: "Some of stories isn't available!",
  msgNoReply: "This Reply currently isn't available!",
  msgNoComment: "This Comment currently isn't available!",
  msgNoStory: "Story isn't available!",
};

export const getReplies = (repliesIds) => async (dispatch) => {
  dispatch(actFetchRepliesReq());

  let responseReplies = await getItems(repliesIds);

  if (isNotAllElementsAvilable(responseReplies)) {
    dispatch(actFetchRepliesFail(errorMessages.msgNoReply));
    responseReplies = getFilteredElements(responseReplies, repliesIds);
  }

  dispatch(actFetchRepliesSucc(responseReplies));
};
