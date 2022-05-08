import { combineReducers } from 'redux';
import { storiesReducer } from './reducers/stories-reducer';

const rootReducers = combineReducers({
  stories: storiesReducer,
});

export default rootReducers;
