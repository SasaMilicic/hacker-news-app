import { combineReducers } from 'redux';
import { topStoryreducer } from './stories/stories-reducer';

const reducers = combineReducers({
  topStories: topStoryreducer,
});

export default reducers;
