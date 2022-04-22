import { combineReducers } from 'redux';
import topStoryReducer from './reducers/stories-reducer';

const reducers = combineReducers({
  topStory: topStoryReducer,
});

export default reducers;
