import React, { useEffect } from 'react';
import * as S from './style-app';
import Header from './components/Header/Header';
import MainStoryPage from './components/Main/story-page/MainStoryPage';
import Footer from './components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStoriesData } from './state/fetch-fun';

function App() {
  const { firstSliceIndex } = useSelector((state) => state.stories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStoriesData());
  }, [firstSliceIndex]);

  return (
    <S.App>
      <Header />
      <MainStoryPage />
      <Footer />
    </S.App>
  );
}

export default App;
