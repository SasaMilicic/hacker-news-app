import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import reducers from './index-reducers';

export const store = createStore(reducers, {}, devToolsEnhancer());
