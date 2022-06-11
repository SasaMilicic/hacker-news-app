import {
  actFetchCommentsReq,
  actFetchCommentsSucc,
  actFetchCommentsFail,
  actFetchStorySucc,
} from '../state/reducers/comments-reducer';

import {
  getItems,
  isNotAllElementsAvilable,
  getFilteredElements,
} from '../utils/utils-api';

import { ITEM_URL } from '../utils/utils-api';

const errorMessages = {
  msgNoComment: "This Comment currently isn't available!",
  msgNoStory: "Story isn't available!",
};

export const getComments = (id) => async (dispatch) => {
  dispatch(actFetchCommentsReq());

  const apiStory = await fetch(ITEM_URL(id));

  if (!apiStory.ok) {
    dispatch(actFetchCommentsFail(errorMessages.msgNoStory));
    return;
  }

  const responseStory = await apiStory.json();
  dispatch(actFetchStorySucc(responseStory));

  const commentsIds = responseStory.kids;
  let responseComments = await getItems(commentsIds);

  if (isNotAllElementsAvilable(responseComments)) {
    dispatch(actFetchCommentsFail(errorMessages.msgNoComment));
    responseComments = getFilteredElements(responseComments, commentsIds);
  }

  dispatch(actFetchCommentsSucc(responseComments));
};
