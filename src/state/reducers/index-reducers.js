import { combineReducers } from 'redux';
import { storiesReducer } from './stories-reducer';
import { commentReducer } from './comments-reducer';

const rootReducers = combineReducers({
  stories: storiesReducer,
  comment: commentReducer,
});

export default rootReducers;
