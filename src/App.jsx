import React, { useEffect } from 'react';
import Header from './components/header/Header';
import Pages from './pages/Pages';
import { StApp } from './style-app';
import { BrowserRouter } from 'react-router-dom';
import { getStoriesIds } from './api/api-stories-ids';
import { useDispatch, useSelector } from 'react-redux';
import { isArrayEmpty } from './utils/utils-components';
import { selectStoriesIds } from './state/selectors';

function App() {
  const dispatch = useDispatch();
  const storiesIds = useSelector(selectStoriesIds);

  const isStoriesIdsFiled = !isArrayEmpty(storiesIds);

  useEffect(() => {
    dispatch(getStoriesIds());
  }, []);

  return (
    <StApp>
      <BrowserRouter>
        <Header />
        {isStoriesIdsFiled && !storiesIds.error && <Pages />}
      </BrowserRouter>
    </StApp>
  );
}

export default App;
