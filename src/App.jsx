import React, { useEffect } from 'react';
import * as S from './style-app';
import Header from './components/Header/Header';
import MainStoryPage from './components/Main/story-page/MainStoryPage';
import Footer from './components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStoriesData } from './state/fetch-fun';

function App() {
  const dispatch = useDispatch();
  const { firstSliceIndex, numArticles } = useSelector(
    (state) => state.stories
  );

  useEffect(() => {
    dispatch(fetchStoriesData(firstSliceIndex, numArticles));
  }, [firstSliceIndex, numArticles]);

  return (
    <S.App>
      <Header />
      <MainStoryPage />
      <Footer />
    </S.App>
  );
}

export default App;
