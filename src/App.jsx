import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import MainStoryPage from './components/Main/story-page/MainStoryPage';
import Footer from './components/Footer/Footer';
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
      <MainStoryPage />
      <Footer />
    </StApp>
  );
}

export default App;
