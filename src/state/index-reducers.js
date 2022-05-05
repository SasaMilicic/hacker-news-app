import { combineReducers } from 'redux';
import { topStoryreducer } from './stories/fake-stories-reducer';
import { storiesReducer } from './fetch_data/stories-reducer';

const reducers = combineReducers({
  topStories: topStoryreducer,
  stories: storiesReducer,
});

export default reducers;
