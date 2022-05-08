import { combineReducers } from 'redux';
import { storiesReducer } from './stories-reducer';

const rootReducers = combineReducers({
  stories: storiesReducer,
});

export default rootReducers;
