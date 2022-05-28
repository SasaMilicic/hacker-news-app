import React, { useEffect } from 'react';
import Header from './components/header/Header';
import Pages from './pages/Pages';
import { StApp } from './style-app';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
      <BrowserRouter>
        <Header />
        <Pages />
      </BrowserRouter>
    </StApp>
  );
}

export default App;
