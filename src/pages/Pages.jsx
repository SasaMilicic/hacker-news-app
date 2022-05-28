import React from 'react';
import StoriesPage from './StoriesPage';
import CommentsPage from './CommentsPage';
import { Routes, Route } from 'react-router-dom';

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<StoriesPage />} />
      <Route path="/stories" element={<StoriesPage />} />
      <Route path="/comments" element={<CommentsPage />} />
    </Routes>
  );
}

export default Pages;
