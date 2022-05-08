import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import rootReducers from '../state/reducers/index-reducers';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(rootReducers, composedEnhancer);
