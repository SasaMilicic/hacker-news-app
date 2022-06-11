import React, { useEffect } from 'react';
import Header from './components/header/Header';
import Pages from './pages/Pages';
import { StApp } from './style-app';
import { BrowserRouter } from 'react-router-dom';
import { getStoriesIds } from './api/api-stories-ids';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStoriesIds());
  }, []);

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
