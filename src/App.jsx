import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/header/Header';
import StoriesArticles from './components/stories/StoriesArticles';
import StoriesButtons from './components/stories/StoriesButtons';
import { StApp } from './style-app';
import { getStories } from './state/fetch-fun';
import { selectPageRange } from './state/selectors';

function App() {
  const dispatch = useDispatch();
  const stories = useSelector((state) => state.stories);

  const pageRange = selectPageRange(stories);

  useEffect(() => {
    dispatch(getStories(...pageRange));
  }, [...pageRange]);

  return (
    <StApp>
      <Header />
      <StoriesArticles />
      <StoriesButtons />
    </StApp>
  );
}

export default App;
