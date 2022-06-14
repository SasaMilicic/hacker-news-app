import { getItem } from '../utils/utils-api';
import {
  actFetchComment,
  actFetchCommentStory,
} from '../state/reducers/reducer-comments';
import { actFetchReply } from '../state/reducers/reducer-replies';
import { actFetchStory } from '../state/reducers/reducer-stories';

export const getComment = getItem(actFetchComment);
export const getReply = getItem(actFetchReply);
export const getCommentStory = getItem(actFetchCommentStory);
export const getStory = getItem(actFetchStory);
