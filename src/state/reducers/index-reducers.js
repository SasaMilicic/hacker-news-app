import { combineReducers } from 'redux';
import { storiesReducer } from './stories-reducer';
import { commentReducer } from './comments-reducer';
import { repliesReducer } from './reply-reducer';

const rootReducers = combineReducers({
  stories: storiesReducer,
  comments: commentReducer,
  replies: repliesReducer,
});

export default rootReducers;
