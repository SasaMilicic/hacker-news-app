import { combineReducers } from 'redux';
import { topStoryreducer } from './stories_fake/fake-stories-reducer';
import { storiesReducer } from './reducers/stories-reducer';

const rootReducers = combineReducers({
  topStories: topStoryreducer,
  stories: storiesReducer,
});

export default rootReducers;
