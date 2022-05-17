import React, { useEffect } from 'react';
import { StApp } from './style-app';
import Header from './components/Header/Header';
import MainStoryPage from './components/Main/story-page/MainStoryPage';
import Footer from './components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getStories } from './state/fetch-fun';

function App() {
  const dispatch = useDispatch();
  const {
    pageRange: { firstPageEl, lastPageEl },
    NUM_ARTICLES,
  } = useSelector((state) => state.stories);

  useEffect(() => {
    dispatch(getStories(firstPageEl, lastPageEl));
  }, [firstPageEl, lastPageEl]);

  const pageNumber = Math.ceil(firstPageEl / NUM_ARTICLES) + 1; // craeteSelector()
  console.log(pageNumber);

  return (
    <StApp>
      <Header />
      <MainStoryPage />
      <Footer pageNumber={pageNumber} />
    </StApp>
  );
}

export default App;
