import {
  actFetchRepliesReq,
  actFetchRepliesSucc,
  actFetchRepliesFail,
} from '../state/reducers/reply-reducer';

import {
  getItems,
  isNotAllElementsAvilable,
  getFilteredElements,
} from '../utils/utils-api';

const errorMessages = {
  msgNoReply: "This Reply currently isn't available!",
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
