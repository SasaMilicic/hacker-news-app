import { combineReducers } from 'redux';
import { topStoryreducer } from './stories/stories-reducer';

const reducers = combineReducers({
  topStory: topStoryreducer,
});

export default reducers;
