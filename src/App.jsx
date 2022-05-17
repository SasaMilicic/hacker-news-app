import React, { useEffect } from 'react';
import { StApp } from './style-app';
import Header from './components/Header/Header';
import MainStoryPage from './components/Main/story-page/MainStoryPage';
import Footer from './components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getStories } from './state/fetch-fun';

function App() {
  const dispatch = useDispatch();
  const { firstPageEl, lastPageEl } = useSelector(
    (state) => state.stories.pageRange
  );

  useEffect(() => {
    dispatch(getStories(firstPageEl, lastPageEl));
  }, [firstPageEl, lastPageEl]);

  const pageNumber = Math.ceil(firstPageEl / lastPageEl) + 1; // craeteSelector()

  return (
    <StApp>
      <Header />
      <MainStoryPage />
      <Footer pageNumber={pageNumber} />
    </StApp>
  );
}

export default App;
